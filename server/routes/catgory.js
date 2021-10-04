const express = require("express");
const Category = require('../models/Category');
// const { route } = require("./Category");

const router = express.Router();

router.post('/addcategory', async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        await res.status(201).json({ msg: 'Category added succesfuly' })

    } catch (error) {
        console.error('impoosible dajouter category ', error);
        res.status(401).json({ msg: 'category register Failed' })
    }
})

router.get('/getallcategory', async (req, res) => {
    try {
        const allO = await Category.find();
        allO
        await res.status(201).json(allO)
    } catch (error) {
        console.error("getting category failed", error);
        res.status(401).json({ msg: `getting category Failed` });
    }
})

router.put('/editcategory/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const searchResult = await Category.findByIdAndUpdate(_id, req.body);
        await res.status(201).json({ msg: 'category updated successfully' })

    } catch (error) {
        console.error("Category update failed", error);
        res.status(401).json({ msg: `Category update Failed` });
    }
})
router.delete('/deletecategory/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Category.findByIdAndDelete(id);
        res.status(201).json({ msg: `category deleted` });
    } catch (error) {
        console.error("category deleting failed", error);
        res.status(401).json({ msg: `category deleting Failed` });
    }
});

module.exports = router;
