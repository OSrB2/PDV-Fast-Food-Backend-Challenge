import { Request, Response } from "express";
import { productService } from "../services";

export const ProductController = {
  async create(req: Request, res: Response) {
    try {
      const { name, product_code, description, price } = req.body;

      const newProd = await productService.register(
        name,
        product_code,
        description,
        price
      );

      return res.status(201).json(newProd);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const findProduct = await productService.allProducts();

      return res.status(200).json(findProduct);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async getByID(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const findProd = await productService.productID(id);

      if (!findProd) {
        return res.status(404).json("Product not found");
      }

      return res.status(200).json(findProd);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async prodByName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const findProd = await productService.productName(name);

      if (!findProd) {
        return res.status(404).json("Product not found");
      }
      return res.status(200).json(findProd);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, product_code, description, price } = req.body;

      const checkProd = await productService.productID(id);

      if (!checkProd) {
        return res.status(404).json("Product not found");
      }

      const prodUpdated = await productService.updateProduct(
        id,
        name,
        product_code,
        description,
        price
      );
      return res.status(200).json(prodUpdated);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async disable(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(404).json("Product not found");
      }

      await productService.disableProduct(id);

      return res.status(200).json("Product disabled");
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },
};
