const express = require('express');
const router = express.Router();
const Omos = require('../models/omos.model');

// Multer middleware (upload-const skal ligge FØR de funktioner som kalder den (POST og PUT))
// Multer igonrer denne hvis der ikke er en fil med - ingen fejl eller noget - fortsætter bare og returnerer ingen file/filename (hurra aht patch/put!)
const multer = require('multer');
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/omos');
    },
    filename: function (req, file, cb) {
      //cb(null, Date.now() + '-' + file.originalname)
      cb(null, file.originalname);
    },
  }),
});

// ----- HENT/GET ALLE ------------------------------------------------------------------------------------------
// ----- GET http://localhost:5021/omos

router.get('/', async (req, res) => {
  console.log('HENT ALLE omos');

  try {
    const omos = await Omos.find();

    res.json(omos);
  } catch (err) {
    res.status(500).json({ message: 'Der var en fejl i / :' + err.message }); // 500 = serverproblem
  }
});

// ----- HENT/GET UDVALGT omos -------------------------------------------------------------------------------------------------------------
// ----- GET http://localhost:5021/omos/xxxxx

router.get('/:id', findOmos, async (req, res) => {
  //

  console.log('HENT UDVALGT');

  res.json(res.omos);
});

// ADMIN ROUTES  -----------------------------------------------------------
// *************************************************************************

// ----- OPRET/POST NY ----------------------------------------------------------------------------------------
// ----- POST http://localhost:5021/omos/admin

router.post('/admin', upload.single('billede'), async (req, res) => {
  console.log('POST omos', req.body);

  // UDEN UPLOAD AF IMAGE med multer - kan testes med rest-fil:
  //const omos = new Omos(req.body);

  // Med image-upload fra multer - testes med Postman
  const omos = new Omos({
    ...JSON.parse(req.body.omos),
    billede: req.file.filename,
  });

  try {
    const ny = await omos.save();
    res.status(201).json({ message: 'Ny omos er oprettet', omos: ny });
  } catch (error) {
    res.status(400).json({ message: 'Der er sket en fejl', error: error });
  }
});

// ----- SLET/DELETE -------------------------------------------------------------------------------------------------------------
// ----- DELETE http://localhost:5021/omos/admin/xxxxxxxxx

router.delete('/admin/:id', findOmos, async (req, res) => {
  console.log('DELETE omos');

  try {
    await res.omos.remove();
    res.status(200).json({ message: 'omos er nu slettet' });
  } catch (error) {
    res.status(500).json({
      message:
        'omos kan ikke slettes - der er opstået en fejl: ' + error.message,
    });
  }
});

// ----- RET/PUT -------------------------------------------------------------------------------------------------------------
// ----- PUT http://localhost:5021/omos/admin/xxxxxxxxx

router.put(
  '/admin/:id',
  upload.single('billede'),
  findOmos,
  async (req, res) => {
    console.log('PUT omos', res.overskrift);

    try {
      // UDEN UPLOAD AF IMAGE med multer - kan testes med rest-fil:
      // Husk at id ikke er med i req.body - derfor dur det ikke med res.gaade = req.body;
      /*
            res.omos.overskrift = req.body.overskrift;
            res.omos.beskrivelse = req.body.beskrivelse;
            res.omos.billede = req.body.billede;
        */

      // MED UPLOAD AF IMAGE med multer - testes med Postman:
      const omos = JSON.parse(req.body.omos);

      res.omos.overskrift = omos.overskrift;
      res.omos.beskrivelse = omos.beskrivelse;
      res.omos.billede = omos.billede;
      // fra multer
      res.omos.billede = req.file.filename;

      await res.omos.save();
      res.status(200).json({ message: 'omos er rettet', rettetomos: res.omos });
    } catch (error) {
      res.status(400).json({
        message:
          'omos kan ikke rettes - der er opstået en fejl: ' + error.message,
      });
    }
  }
);

// MIDDLEWARE

// FIND UD FRA ID  ---------------------------------------------------------------------------------------------

async function findOmos(req, res, next) {
  console.log('FIND UD FRA ID', req.params.id);
  let omos;

  try {
    omos = await Omos.findById(req.params.id);

    if (omos == null) {
      return res.status(404).json({ message: 'Ingen omos med den ID' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Problemer: ' + error.message }); // problemer med server
  }

  res.omos = omos; // put det fundne ind i responset
  next();
}

module.exports = router;
