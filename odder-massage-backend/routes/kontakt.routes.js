const express = require('express');
const router = express.Router();
const Kontakt = require('../models/kontakt.model');

// ----- HENT/GET ALLE ------------------------------------------------------------------------------------------
// ----- GET http://localhost:5021/kontakt

router.get('/', async (req, res) => {
  console.log('HENT ALLE kontakt');

  try {
    const kontakt = await Kontakt.find();

    res.json(kontakt);
  } catch (err) {
    res.status(500).json({ message: 'Der var en fejl i / :' + err.message }); // 500 = serverproblem
  }
});

// ----- HENT/GET UDVALGT kontakt -------------------------------------------------------------------------------------------------------------
// ----- GET http://localhost:5021/kontakt/xxxxx

router.get('/:id', findKontakt, async (req, res) => {
  //

  console.log('HENT UDVALGT');

  res.json(res.kontakt);
});

// ADMIN ROUTES  -----------------------------------------------------------
// *************************************************************************

// ----- OPRET/POST NY ----------------------------------------------------------------------------------------
// ----- POST http://localhost:5021/kontakt/admin

router.post('/', async (req, res) => {
  console.log('POST kontakt', req.body);

  const kontakt = new Kontakt(req.body);
  // dato sættes automatisk med default i model

  try {
    const ny = await kontakt.save();
    res.status(201).json({ message: 'Ny kontakt er oprettet', kontakt: ny });
  } catch (error) {
    res.status(400).json({ message: 'Der er sket en fejl', error: error });
  }
});

// ----- SLET/DELETE -------------------------------------------------------------------------------------------------------------
// ----- DELETE http://localhost:5021/kontakt/admin/xxxxxxxxx

router.delete('/admin/:id', findKontakt, async (req, res) => {
  console.log('DELETE kontakt');

  try {
    await res.kontakt.remove();
    res.status(200).json({ message: 'kontakt er nu slettet' });
  } catch (error) {
    res.status(500).json({
      message:
        'kontakt kan ikke slettes - der er opstået en fejl: ' + error.message,
    });
  }
});

// ----- RET/PUT -------------------------------------------------------------------------------------------------------------
// ----- PUT http://localhost:5021/kontakt/admin/xxxxxxxxx

router.put('/admin/:id', findKontakt, async (req, res) => {
  console.log('PUT kontakt');

  try {
    // Husk at id ikke er med i req.body - derfor dur det ikke med res.gaade = req.body;
    res.kontakt.navn = req.body.navn;
    res.kontakt.emailadresse = req.body.emailadresse;
    res.kontakt.emne = req.body.emne;
    res.kontakt.besked = req.body.besked;
    // dato skal ikke kunne rettes

    await res.kontakt.save();
    res
      .status(200)
      .json({ message: 'kontakt er rettet', rettetkontakt: res.kontakt });
  } catch (error) {
    res.status(400).json({
      message:
        'kontakt kan ikke rettes - der er opstået en fejl: ' + error.message,
    });
  }
});

// MIDDLEWARE

// FIND UD FRA ID  ---------------------------------------------------------------------------------------------

async function findKontakt(req, res, next) {
  console.log('FIND UD FRA ID', req.params.id);
  let kontakt;

  try {
    kontakt = await Kontakt.findById(req.params.id);

    if (kontakt == null) {
      return res.status(404).json({ message: 'Ingen kontakt med den ID' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Problemer: ' + error.message }); // problemer med server
  }

  res.kontakt = kontakt; // put det fundne ind i responset
  next();
}

module.exports = router;
