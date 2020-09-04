const express = require('express');
const router = express.Router();
const Bestyrelsespost = require('../models/bestyrelsespost.model');

// ----- HENT/GET ALLE ------------------------------------------------------------------------------------------
// ----- GET http://localhost:5021/bestyrelsespost

router.get('/', async (req, res) => {

    console.log("HENT ALLE bestyrelsespost");

    try {
        const bestyrelsespost = await Bestyrelsespost.find();

        res.json(bestyrelsespost);

    } catch (err) {
        res.status(500).json({ message: "Der var en fejl i / :" + err.message }); // 500 = serverproblem
    }

});


// ----- HENT/GET UDVALGT bestyrelsespost ------------------------------------------------------------------------------------------------------------- 
// ----- GET http://localhost:5021/bestyrelsespost/xxxxx

router.get('/:id', findBestyrelsespost, async (req, res) => { //

    console.log("HENT UDVALGT")

    res.json(res.bestyrelsespost);

});


// ADMIN ROUTES  -----------------------------------------------------------
// *************************************************************************


// ----- OPRET/POST NY ----------------------------------------------------------------------------------------
// ----- POST http://localhost:5021/bestyrelsespost/admin

router.post('/admin', async (req, res) => {

    console.log("POST bestyrelsespost", req.body);

    const bestyrelsespost = new Bestyrelsespost(req.body);

    try {
        const ny = await bestyrelsespost.save();
        res.status(201).json({ message: "Ny bestyrelsespost er oprettet", bestyrelsespost: ny });

    } catch (error) {
        res.status(400).json({ message: "Der er sket en fejl", error: error });
    }

});



// ----- SLET/DELETE ------------------------------------------------------------------------------------------------------------- 
// ----- DELETE http://localhost:5021/bestyrelsespost/admin/xxxxxxxxx

router.delete('/admin/:id', findBestyrelsespost, async (req, res) => {

    console.log("DELETE bestyrelsespost")

    try {

        await res.bestyrelsespost.remove();
        res.status(200).json({ message: 'bestyrelsespost er nu slettet' })

    } catch (error) {
        res.status(500).json({ message: 'bestyrelsespost kan ikke slettes - der er opstået en fejl: ' + error.message })
    }



});

// ----- RET/PUT ------------------------------------------------------------------------------------------------------------- 
// ----- PUT http://localhost:5021/bestyrelsespost/admin/xxxxxxxxx

router.put('/admin/:id', findBestyrelsespost, async (req, res) => {

    console.log("PUT bestyrelsespost")

    try {

        // Husk at id ikke er med i req.body - derfor dur det ikke med res.gaade = req.body;
        res.bestyrelsespost.post = req.body.post;

        await res.bestyrelsespost.save();
        res.status(200).json({ message: 'bestyrelsespost er rettet', rettetbestyrelsespost: res.bestyrelsespost });

    } catch (error) {
        res.status(400).json({ message: 'bestyrelsespost kan ikke rettes - der er opstået en fejl: ' + error.message })
    }

});



// MIDDLEWARE 

// FIND UD FRA ID  ---------------------------------------------------------------------------------------------

async function findBestyrelsespost(req, res, next) {

    console.log("FIND UD FRA ID", req.params.id)
    let bestyrelsespost;

    try {

        bestyrelsespost = await Bestyrelsespost.findById(req.params.id);

        if (bestyrelsespost == null) {
            return res.status(404).json({ message: 'Ingen bestyrelsespost med den ID' });
        }


    } catch (error) {

        console.log(error);
        return res.status(500).json({ message: "Problemer: " + error.message }); // problemer med server
    }

    res.bestyrelsespost = bestyrelsespost; // put det fundne ind i responset
    next();
}


module.exports = router;