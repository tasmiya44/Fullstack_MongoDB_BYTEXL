import express from "express";
import { createProduct, getAllProducts, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/", createProduct);          
router.get("/products", getAllProducts);          
router.put("/:id", updateProduct);        
router.delete("/:id", deleteProduct);     

export default router;
