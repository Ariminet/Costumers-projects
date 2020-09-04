const express = require('express');
const router = express.Router();
const Region = require('../models/region.model');

// ----- HENT/GET ALLE ------------------------------------------------------------------------------------------
// ----- GET http://localhost:5021/region

router.get('/', async (req, res) => {

    console.log("HENT ALLE region");

    try {
        const region = await Region.find();

        res.json(region);

    } catch (err) {
        res.status(500).json({ message: "Der var en fejl i / :" + err.message }); // 500 = serverproblem
    }

});


// ----- HENT/GET UDVALGT region ------------------------------------------------------------------------------------------------------------- 
// ----- GET http://localhost:5021/region/xxxxx

router.get('/:id', findRegion, async (req, res) => { //

    console.log("HENT UDVALGT")

    res.json(res.region);

});


// ADMIN ROUTES  -----------------------------------------------------------
// *************************************************************************


// ----- OPRET/POST NY ----------------------------------------------------------------------------------------
// ----- POST http://localhost:5021/region/admin

router.post('/admin', async (req, res) => {

    console.log("POST region", req.body);

    const region = new Region(req.body);

    try {
        const ny = await region.save();
        res.status(201).json({ message: "Ny region er oprettet", region: ny });

    } catch (error) {
        res.status(400).json({ message: "Der er sket en fejl", error: error });
    }

});



// ----- SLET/DELETE ------------------------------------------------------------------------------------------------------------- 
// ----- DELETE http://localhost:5021/region/admin/xxxxxxxxx

router.delete('/admin/:id', findRegion, async (req, res) => {

    console.log("DELETE region")

    try {

        await res.region.remove();
        res.status(200).json({ message: 'region er nu slettet' })

    } catch (error) {
        res.status(500).json({ message: 'region kan ikke slettes - der er opstået en fejl: ' + error.message })
    }



});

// ----- RET/PUT ------------------------------------------------------------------------------------------------------------- 
// ----- PUT http://localhost:5021/region/admin/xxxxxxxxx

router.put('/admin/:id', findRegion, async (req, res) => {

    console.log("PUT region")

    try {

        // Husk at id ikke er med i req.body - derfor dur det ikke med res.gaade = req.body;
        res.region.regionnavn = req.body.regionnavn;


        await res.region.save();
        res.status(200).json({ message: 'region er rettet', rettetregion: res.region });

    } catch (error) {
        res.status(400).json({ message: 'region kan ikke rettes - der er opstået en fejl: ' + error.message })
    }

});



// MIDDLEWARE 

// FIND UD FRA ID  ---------------------------------------------------------------------------------------------

async function findRegion(req, res, next) {

    console.log("FIND UD FRA ID", req.params.id)
    let region;

    try {

        region = await Region.findById(req.params.id);

        if (region == null) {
            return res.status(404).json({ message: 'Ingen region med den ID' });
        }


    } catch (error) {

        console.log(error);
        return res.status(500).json({ message: "Problemer: " + error.message }); // problemer med server
    }

    res.region = region; // put det fundne ind i responset
    next();
}


module.exports = router;