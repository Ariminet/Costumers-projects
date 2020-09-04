const express = require('express');
const router = express.Router();
const Event = require('../models/event.model');

// Multer middleware (upload-const skal ligge FØR de funktioner som kalder den (POST og PUT))
// Multer igonrer denne hvis der ikke er en fil med - ingen fejl eller noget - fortsætter bare og returnerer ingen file/filename (hurra aht patch/put!)
const multer = require('multer');
const upload = multer({

    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/images/events');
        },
        filename: function (req, file, cb) {
            //cb(null, Date.now() + '-' + file.originalname)
            cb(null, file.originalname)
        }
    })
});


// ----- HENT/GET ALLE ------------------------------------------------------------------------------------------
// ----- GET http://localhost:5021/event

router.get('/', async (req, res) => {

    console.log("HENT ALLE event");

    try {
        const event = await Event.find().populate('region');
        res.json(event);

    } catch (err) {
        res.status(500).json({ message: "Der var en fejl i / :" + err.message }); // 500 = serverproblem
    }

});


// ----- HENT/GET SØGNING event ------------------------------------------------------------------------------------------------------------- 
// ----- GET http://localhost:5021/event/soegavanceret
// ----- OBS! Denne skal ligge før /:id da ordet "soeg" i routen ellers bliver regnet for en "id"

router.get('/soegavanceret', async (req, res) => { //

    console.log("SØG AVANCERET event");

    const { titel, distance_min, distance_max, pris_min, pris_max, region } = req.query;

    try {

        const event = await Event.find({
            titel: (titel) ? { "$regex": titel, "$options": "i" } : /.*/,
            region: region,
            pris: { $gt: pris_min - 1, $lt: pris_max + 1 },
            distance: { $gt: distance_min - 1, $lt: distance_max + 1 }
        }).populate('region');

        res.json(event);

    } catch (err) {
        res.status(500).json({ message: "Der var en fejl i / :" + err.message }); // 500 = serverproblem
    }

});



// ----- HENT/GET SØGNING event ------------------------------------------------------------------------------------------------------------- 
// ----- GET http://localhost:5021/event/soeg
// ----- OBS! Denne skal ligge før /:id da ordet "soeg" i routen ellers bliver regnet for en "id"

router.get('/soeg/:soegeord', async (req, res) => { //

    console.log("SØG SIMPEL event");

    try {

        const event = await Event.find({
            $or: [
                { "titel": { "$regex": req.params.soegeord, "$options": "i" } }, // søg i alt som små bogstaver
                { "beskrivelse": { "$regex": req.params.soegeord, "$options": "i" } }, // søg i alt som små bogstaver
            ]
        }).populate('region');

        res.json(event);

    } catch (err) {
        res.status(500).json({ message: "Der var en fejl i / :" + err.message }); // 500 = serverproblem
    }

});



// ----- HENT/GET UDVALGT event ------------------------------------------------------------------------------------------------------------- 
// ----- GET http://localhost:5021/event/xxxxx

router.get('/:id', findEvent, async (req, res) => { //

    console.log("HENT UDVALGT")

    res.json(res.event);

});



// ADMIN ROUTES  -----------------------------------------------------------
// *************************************************************************


// ----- OPRET/POST NY ----------------------------------------------------------------------------------------
// ----- POST http://localhost:5021/event/admin

router.post('/admin', upload.single('billede'), async (req, res) => {

    console.log("POST event");

    // UDEN UPLOAD AF IMAGE med multer - kan testes med rest-fil:
    //const event = new Event(req.body);

    // Med image-upload fra multer - testes med Postman
    const event = new Event({
        ...JSON.parse(req.body.event),
        "billede": req.file.filename
    });

    try {
        const ny = await event.save();
        res.status(201).json({ message: "Ny event er oprettet", event: ny });

    } catch (error) {
        res.status(400).json({ message: "Der er sket en fejl", error: error });
    }

});



// ----- SLET/DELETE ------------------------------------------------------------------------------------------------------------- 
// ----- DELETE http://localhost:5021/event/admin/xxxxxxxxx

router.delete('/admin/:id', findEvent, async (req, res) => {

    console.log("DELETE event")

    try {

        await res.event.remove();
        res.status(200).json({ message: 'event er nu slettet' })

    } catch (error) {
        res.status(500).json({ message: 'event kan ikke slettes - der er opstået en fejl: ' + error.message })
    }



});

// ----- RET/PUT ------------------------------------------------------------------------------------------------------------- 
// ----- PUT http://localhost:5021/event/admin/xxxxxxxxx

router.put('/admin/:id', upload.single('billede'), findEvent, async (req, res) => {

    console.log("PUT event")

    try {

        // UDEN UPLOAD AF IMAGE med multer - kan testes med rest-fil:
        // Husk at id ikke er med i req.body - derfor dur det ikke med res.gaade = req.body;
        /*
            res.event.titel = req.body.titel;
            res.event.dato = req.body.dato;
            res.event.beskrivelse = req.body.beskrivelse;
            res.event.distance = req.body.distance;
            res.event.pris = req.body.pris;
            res.event.billede = req.body.billede;
            res.event.antalpladser = req.body.antalpladser;
            res.event.region = req.body.region;
        */

        // MED UPLOAD AF IMAGE med multer - testes med Postman:
        const event = JSON.parse(req.body.event)

        res.event.titel = event.titel;
        res.event.dato = event.dato;
        res.event.beskrivelse = event.beskrivelse;
        res.event.distance = event.distance;
        res.event.pris = event.pris;
        res.event.antalpladser = event.antalpladser;
        res.event.region = event.region;
        // fra multer
        res.event.billede = req.file.filename;

        await res.event.save();
        res.status(200).json({ message: 'event er rettet', rettetevent: res.event });

    } catch (error) {
        res.status(400).json({ message: 'event kan ikke rettes - der er opstået en fejl: ' + error.message })
    }

});



// MIDDLEWARE 

// FIND UD FRA ID  ---------------------------------------------------------------------------------------------

async function findEvent(req, res, next) {

    console.log("FIND UD FRA ID", req.params.id)
    let event;

    try {

        event = await Event.findById(req.params.id);

        if (event == null) {
            return res.status(404).json({ message: 'Ingen event med den ID' });
        }


    } catch (error) {

        console.log(error);
        return res.status(500).json({ message: "Problemer: " + error.message }); // problemer med server
    }

    res.event = event; // put det fundne ind i responset
    next();
}


module.exports = router;