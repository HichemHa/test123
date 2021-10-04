const express = require("express");
const { route } = require("./Livreur");
const Livreur = require('../models/Livreur');

const router = express.Router();

router.post('/addlivreur', async (req, res) => {
    try {
        const newLivreur = new Livreur(req.body);
        await newLivreur.save();
        await res.status(201).json({ msg: 'Livreur added succesfuly' })

    } catch (error) {
        console.error('impoosible dajouterlivreur ', error);
        res.status(401).json({ msg: 'Livreur register Failed' })
    }
})

router.get('/getalllivreur', async (req, res) => {
    try {
        const allO = await Livreur.find();
        allO
        await res.status(201).json(allO)
    } catch (error) {
        console.error("getting Order failed", error);
        res.status(401).json({ msg: `getting Order Failed` });
    }
})

router.put('/editlivreur/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const searchResult = await Livreur.findByIdAndUpdate(_id, req.body);
        await res.status(201).json({ msg: 'Livruer updated successfully' })

    } catch (error) {
        console.error("Livreur update failed", error);
        res.status(401).json({ msg: `Livreur update Failed` });
    }
})
router.delete('/deletelivreur/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Livreur.findByIdAndDelete(id);
        res.status(201).json({ msg: `livreur deleted` });
    } catch (error) {
        console.error("livreur deleting failed", error);
        res.status(401).json({ msg: `livreur deleting Failed` });
    }
});

module.exports = router;
