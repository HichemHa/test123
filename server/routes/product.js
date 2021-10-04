const express = require("express");
const { validator, addingProductRules } = require('../middleware/validator');
const { addingProduct, deleteProduct, updateProduct, getAllProduct, getProductById } = require('../controllers/product.controller');
const multer = require('multer');

const router = express.Router();

router.post("/add", addingProductRules(), validator, addingProduct);
router.put("/update/:id",  updateProduct);
router.get('/', getAllProduct);
router.delete('/delete/:id', deleteProduct);
router.get("/product/:id", getProductById);

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, '../client/public/uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}.jpg`);
    },
});

const upload = multer({ storage });

router.post('/uploadimage', upload.single('image'), (req, res) => {
    res.send(`/uploads/${req.file.filename}`);
});
module.exports = router;
