const express = require("express");
const { route } = require("./product");
const Card = require('../models/Card');

const router = express.Router();

router.post('/addcard', async (req, res) => {
    try {
        const newcard = new Card(req.body);
        await newcard.save();
        await res.status(201).json({ msg: 'Card added succesfuly' })

    } catch (error) {
        console.error('impoosible dajouter au panier ', error);
        res.status(401).json({ msg: 'Card register Failed' })
    }
})

router.get('/getall', async (req, res) => {
    try {
        const allO = await Card.find();
        allO
        await res.status(201).json(allO)
    } catch (error) {
        console.error("getting Order failed", error);
        res.status(401).json({ msg: `getting Order Failed` });
    }
})


router.put('/confirm/', async (req, res) => {
    const { _id } = req.body;
    try {

        const searchResultid = await Card.findById(_id);
        const searchResult = await Card.findByIdAndUpdate(_id, { confirm: !searchResultid.confirm });
        await res.status(201).json({ msg: 'confrim updated successfully' })

    } catch (error) {
        console.error("confirm update failed", error);
        res.status(401).json({ msg: `coonfirm update Failed` });
    }
})
router.delete('/delete/:id', async (req, res) => {
    const _id = req.params.id;

    try {

        await Card.findByIdAndDelete(_id);

        await res.status(201).json({ msg: 'confrim deleted successfully' })

    } catch (error) {
        console.error("confirm deleted failed", error);
        res.status(401).json({ msg: `coonfirm deleted Failed` });
    }
})





module.exports = router;
