const express = require('express');
const router = express.Router();
const Bestyrelse = require('../models/bestyrelse.model');

// Multer middleware (upload-const skal ligge FØR de funktioner som kalder den (POST og PUT))
// Multer igonrer denne hvis der ikke er en fil med - ingen fejl eller noget - fortsætter bare og returnerer ingen file/filename (hurra aht patch/put!)
const multer = require('multer');
const upload = multer({

    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/images/bestyrelse');
        },
        filename: function (req, file, cb) {
            //cb(null, Date.now() + '-' + file.originalname)
            cb(null, file.originalname)
        }
    })
});

// ----- HENT/GET ALLE ------------------------------------------------------------------------------------------
// ----- GET http://localhost:5021/bestyrelse

router.get('/', async (req, res) => {

    console.log("HENT ALLE bestyrelse");

    try {
        const bestyrelse = await Bestyrelse.find().populate('bestyrelsespost');

        res.json(bestyrelse);

    } catch (err) {
        res.status(500).json({ message: "Der var en fejl i / :" + err.message }); // 500 = serverproblem
    }

});


// ----- HENT/GET UDVALGT bestyrelse ------------------------------------------------------------------------------------------------------------- 
// ----- GET http://localhost:5021/bestyrelse/xxxxx

router.get('/:id', findBestyrelse, async (req, res) => { //

    console.log("HENT UDVALGT")

    res.json(res.bestyrelse);

});


// ADMIN ROUTES  -----------------------------------------------------------
// *************************************************************************


// ----- OPRET/POST NY ----------------------------------------------------------------------------------------
// ----- POST http://localhost:5021/bestyrelse/admin

router.post('/admin', upload.single('billede'), async (req, res) => {

    console.log("POST bestyrelse", req.body.bestyrelse);

    // UDEN UPLOAD AF IMAGE med multer - kan testes med rest-fil:
    //const bestyrelse = new Bestyrelse(req.body);

    // Med image-upload fra multer - testes med Postman
    const bestyrelse = new Bestyrelse({
        ...JSON.parse(req.body.bestyrelse),
        "billede": req.file.filename
    });

    try {
        const ny = await bestyrelse.save();
        res.status(201).json({ message: "Ny bestyrelse er oprettet", bestyrelse: ny });

    } catch (error) {
        res.status(400).json({ message: "Der er sket en fejl", error: error });
    }


});



// ----- SLET/DELETE ------------------------------------------------------------------------------------------------------------- 
// ----- DELETE http://localhost:5021/bestyrelse/admin/xxxxxxxxx

router.delete('/admin/:id', findBestyrelse, async (req, res) => {

    console.log("DELETE bestyrelse")

    try {

        await res.bestyrelse.remove();
        res.status(200).json({ message: 'bestyrelse er nu slettet' })

    } catch (error) {
        res.status(500).json({ message: 'bestyrelse kan ikke slettes - der er opstået en fejl: ' + error.message })
    }



});

// ----- RET/PUT ------------------------------------------------------------------------------------------------------------- 
// ----- PUT http://localhost:5021/bestyrelse/admin/xxxxxxxxx

router.put('/admin/:id', findBestyrelse, upload.single('billede'), async (req, res) => {

    console.log("PUT bestyrelse", req.body.bestyrelse)

    try {


        // UDEN UPLOAD AF IMAGE med multer - kan testes med rest-fil:
        // Husk at id ikke er med i req.body - derfor dur det ikke med res.gaade = req.body;
        /* 
            res.bestyrelse.fornavn = req.body.fornavn;
            res.bestyrelse.efternavn = req.body.efternavn;
            es.bestyrelse.email = req.body.email;
            res.bestyrelse.billede = req.body.billede;
            res.bestyrelse.beskrivelse = req.body.beskrivelse;
            res.bestyrelse.bestyrelsespost = req.body.bestyrelsespost; 
        */

        // MED UPLOAD AF IMAGE med multer - testes med Postman:
        const bestyrelse = JSON.parse(req.body.bestyrelse)

        res.bestyrelse.fornavn = bestyrelse.fornavn;
        res.bestyrelse.efternavn = bestyrelse.efternavn;
        res.bestyrelse.email = bestyrelse.email;
        res.bestyrelse.beskrivelse = bestyrelse.beskrivelse;
        res.bestyrelse.bestyrelsespost = bestyrelse.bestyrelsespost;
        // fra multer
        res.bestyrelse.billede = req.file.filename;


        await res.bestyrelse.save();
        res.status(200).json({ message: 'bestyrelse er rettet', rettetbestyrelse: res.bestyrelse });

    } catch (error) {
        res.status(400).json({ message: 'bestyrelse kan ikke rettes - der er opstået en fejl: ' + error.message })
    }

});



// MIDDLEWARE 

// FIND UD FRA ID  ---------------------------------------------------------------------------------------------

async function findBestyrelse(req, res, next) {

    console.log("FIND UD FRA ID", req.params.id)
    let bestyrelse;

    try {

        bestyrelse = await Bestyrelse.findById(req.params.id);

        if (bestyrelse == null) {
            return res.status(404).json({ message: 'Ingen bestyrelse med den ID' });
        }


    } catch (error) {

        console.log(error);
        return res.status(500).json({ message: "Problemer: " + error.message }); // problemer med server
    }

    res.bestyrelse = bestyrelse; // put det fundne ind i responset
    next();
}


module.exports = router;