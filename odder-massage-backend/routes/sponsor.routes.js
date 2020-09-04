const express = require('express');
const router = express.Router();
const Sponsor = require('../models/sponsor.model');


// Multer middleware (upload-const skal ligge FØR de funktioner som kalder den (POST og PUT))
// Multer igonrer denne hvis der ikke er en fil med - ingen fejl eller noget - fortsætter bare og returnerer ingen file/filename (hurra aht patch/put!)
const multer = require('multer');
const upload = multer({

    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/images/sponsorer');
        },
        filename: function (req, file, cb) {
            //cb(null, Date.now() + '-' + file.originalname)
            cb(null, file.originalname)
        }
    })
});



// ----- HENT/GET ALLE ------------------------------------------------------------------------------------------
// ----- GET http://localhost:5021/sponsor

router.get('/', async (req, res) => {

    console.log("HENT ALLE sponsor");

    try {
        const sponsor = await Sponsor.find().populate('sponsorkategori');

        res.json(sponsor);

    } catch (err) {
        res.status(500).json({ message: "Der var en fejl i / :" + err.message }); // 500 = serverproblem
    }

});


// ----- HENT/GET UDVALGT sponsor ------------------------------------------------------------------------------------------------------------- 
// ----- GET http://localhost:5021/sponsor/xxxxx

router.get('/:id', findSponsor, async (req, res) => { //

    console.log("HENT UDVALGT")

    res.json(res.sponsor);

});


// ADMIN ROUTES  -----------------------------------------------------------
// *************************************************************************


// ----- OPRET/POST NY ----------------------------------------------------------------------------------------
// ----- POST http://localhost:5021/sponsor/admin

router.post('/admin', upload.single('logo'), async (req, res) => {

    console.log("POST sponsor", req.body);

    // UDEN UPLOAD AF IMAGE med multer - kan testes med rest-fil:
    //const sponsor = new Sponsor(req.body);

    // Med image-upload fra multer - testes med Postman
    const sponsor = new Sponsor({
        ...JSON.parse(req.body.sponsor),
        "logo": req.file.filename
    });

    try {
        const ny = await sponsor.save();
        res.status(201).json({ message: "Ny sponsor er oprettet", sponsor: ny });

    } catch (error) {
        res.status(400).json({ message: "Der er sket en fejl", error: error });
    }

});



// ----- SLET/DELETE ------------------------------------------------------------------------------------------------------------- 
// ----- DELETE http://localhost:5021/sponsor/admin/xxxxxxxxx

router.delete('/admin/:id', findSponsor, async (req, res) => {

    console.log("DELETE sponsor")

    try {

        await res.sponsor.remove();
        res.status(200).json({ message: 'sponsor er nu slettet' })

    } catch (error) {
        res.status(500).json({ message: 'sponsor kan ikke slettes - der er opstået en fejl: ' + error.message })
    }



});

// ----- RET/PUT ------------------------------------------------------------------------------------------------------------- 
// ----- PUT http://localhost:5021/sponsor/admin/xxxxxxxxx

router.put('/admin/:id', upload.single('logo'), findSponsor, async (req, res) => {

    console.log("PUT sponsor")

    try {

        // UDEN UPLOAD AF IMAGE med multer - kan testes med rest-fil:
        // Husk at id ikke er med i req.body - derfor dur det ikke med res.gaade = req.body;
        /* 
            res.sponsor.navn = req.body.navn;
            res.sponsor.logo = req.body.logo;
            res.sponsor.sponsorkategori = req.body.sponsorkategori;
        */

        // MED UPLOAD AF IMAGE med multer - testes med Postman:
        const sponsor = JSON.parse(req.body.sponsor)

        res.sponsor.navn = sponsor.navn;
        res.sponsor.sponsorkategori = sponsor.sponsorkategori;
        // fra multer
        res.sponsor.logo = req.file.filename;


        await res.sponsor.save();
        res.status(200).json({ message: 'sponsor er rettet', rettetsponsor: res.sponsor });

    } catch (error) {
        res.status(400).json({ message: 'sponsor kan ikke rettes - der er opstået en fejl: ' + error.message })
    }

});



// MIDDLEWARE 

// FIND UD FRA ID  ---------------------------------------------------------------------------------------------

async function findSponsor(req, res, next) {

    console.log("FIND UD FRA ID", req.params.id)
    let sponsor;

    try {

        sponsor = await Sponsor.findById(req.params.id);

        if (sponsor == null) {
            return res.status(404).json({ message: 'Ingen sponsor med den ID' });
        }


    } catch (error) {

        console.log(error);
        return res.status(500).json({ message: "Problemer: " + error.message }); // problemer med server
    }

    res.sponsor = sponsor; // put det fundne ind i responset
    next();
}


module.exports = router;