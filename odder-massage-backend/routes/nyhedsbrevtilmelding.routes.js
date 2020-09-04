const express = require('express');
const router = express.Router();
const Nyhedsbrevtilmelding = require('../models/nyhedsbrevtilmelding.model');


// ----- HENT/GET ALLE ------------------------------------------------------------------------------------------
// ----- GET http://localhost:5021/nyhedsbrevtilmelding

router.get('/', async (req, res) => {

    console.log("HENT ALLE nyhedsbrevtilmelding");

    try {
        const nyhedsbrevtilmelding = await Nyhedsbrevtilmelding.find();

        res.json(nyhedsbrevtilmelding);

    } catch (err) {
        res.status(500).json({ message: "Der var en fejl i / :" + err.message }); // 500 = serverproblem
    }

});


// ----- HENT/GET UDVALGT nyhedsbrevtilmelding ------------------------------------------------------------------------------------------------------------- 
// ----- GET http://localhost:5021/nyhedsbrevtilmelding/xxxxx

router.get('/:id', findNyhedsbrevtilmelding, async (req, res) => { //

    console.log("HENT UDVALGT")

    res.json(res.nyhedsbrevtilmelding);

});



// ----- OPRET/POST NY ----------------------------------------------------------------------------------------
// ----- POST http://localhost:5021/nyhedsbrevtilmelding/admin
// ----- Kræver ikke admin - brugerne skal kunne poste en tilmelding til nyhedsbrev!

router.post('/', async (req, res) => {
    
    console.log("POST nyhedsbrevtilmelding", req.body);
    
    const nyhedsbrevtilmelding = new Nyhedsbrevtilmelding(req.body);
    
    try {
        const ny = await nyhedsbrevtilmelding.save();
        res.status(201).json({ message: "Ny nyhedsbrevtilmelding er oprettet", nyhedsbrevtilmelding: ny });
        
    } catch (error) {
        res.status(400).json({ message: "Der er sket en fejl", error: error });
    }
    
});


// ADMIN ROUTES  -----------------------------------------------------------
// *************************************************************************


// ----- SLET/DELETE ------------------------------------------------------------------------------------------------------------- 
// ----- DELETE http://localhost:5021/nyhedsbrevtilmelding/admin/xxxxxxxxx

router.delete('/admin/:id', findNyhedsbrevtilmelding, async (req, res) => {

    console.log("DELETE nyhedsbrevtilmelding")

    try {

        await res.nyhedsbrevtilmelding.remove();
        res.status(200).json({ message: 'nyhedsbrevtilmelding er nu slettet' })

    } catch (error) {
        res.status(500).json({ message: 'nyhedsbrevtilmelding kan ikke slettes - der er opstået en fejl: ' + error.message })
    }



});

// ----- RET/PUT ------------------------------------------------------------------------------------------------------------- 
// ----- PUT http://localhost:5021/nyhedsbrevtilmelding/admin/xxxxxxxxx

router.put('/admin/:id', findNyhedsbrevtilmelding, async (req, res) => {

    console.log("PUT nyhedsbrevtilmelding")

    try {

        // Husk at id ikke er med i req.body - derfor dur det ikke med res.gaade = req.body;
        res.nyhedsbrevtilmelding.email = req.body.email;


        await res.nyhedsbrevtilmelding.save();
        res.status(200).json({ message: 'nyhedsbrevtilmelding er rettet', rettetnyhedsbrevtilmelding: res.nyhedsbrevtilmelding });

    } catch (error) {
        res.status(400).json({ message: 'nyhedsbrevtilmelding kan ikke rettes - der er opstået en fejl: ' + error.message })
    }

});



// MIDDLEWARE 

// FIND UD FRA ID  ---------------------------------------------------------------------------------------------

async function findNyhedsbrevtilmelding(req, res, next) {

    console.log("FIND UD FRA ID", req.params.id)
    let nyhedsbrevtilmelding;

    try {

        nyhedsbrevtilmelding = await Nyhedsbrevtilmelding.findById(req.params.id);

        if (nyhedsbrevtilmelding == null) {
            return res.status(404).json({ message: 'Ingen nyhedsbrevtilmelding med den ID' });
        }


    } catch (error) {

        console.log(error);
        return res.status(500).json({ message: "Problemer: " + error.message }); // problemer med server
    }

    res.nyhedsbrevtilmelding = nyhedsbrevtilmelding; // put det fundne ind i responset
    next();
}


module.exports = router;