const Product = require("../models/Product");


exports.addingProduct = async (req, res) => {
    const { name, description, price, p_imageUrl, category, stock } = req.body;
    try {
        const newprod = new Product({ name, description, price, p_imageUrl, category, stock })
        await newprod.save();
        await res.status(201).json({ msg: 'Product added successfully' })
    } catch (error) {
        console.error("Product register failed", error);
        res.status(401).json({ msg: `Product register Failed` });
    }
}

exports.updateProduct = async (req, res) => {
    const _id = req.params.id;
    console.log(_id);
    try {
        const prod = await Product.findByIdAndUpdate(_id, req.body);
        // console.log(prod)
        await res.status(201).json({ msg: 'Product updated successfully' })
    } catch (error) {
        console.error("Product update failed", error);
        res.status(401).json({ msg: `Product update Failed` });
    }

}

exports.getAllProduct = async (req, res) => {

    try {
        const allP = await Product.find();
        allP
        await res.status(201).json(allP)
    } catch (error) {
        console.error("getting Product failed", error);
        res.status(401).json({ msg: `getting Product Failed` });
    }
}


exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        await Product.findByIdAndDelete(id);
        res.status(201).json({ msg: `Product deleted` });
    } catch (error) {
        console.error("Product deleting failed", error);
        res.status(401).json({ msg: `Product deleting Failed` });
    }
}
exports.getProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const prodctbyid = await Product.findById(id);
        res.status(201).json(prodctbyid);
    } catch (error) {
        console.error("get Product failed", error);
        res.status(401).json({ msg: `get Product Failed` });
    }
}
