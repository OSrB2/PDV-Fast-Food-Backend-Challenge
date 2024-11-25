import { Products } from "../models/productsModel";

export class ProductsService {
  async register(
    name: string,
    product_code: number,
    description: string,
    price: number
  ) {
    const newProduct = await Products.create({
      name,
      product_code,
      description,
      price,
      status: true,
    });

    return newProduct;
  }

  async allProducts() {
    const products = await Products.findAll({
      where: {
        status: true,
      },
    });

    return products;
  }

  async productID(id: string) {
    const checkProduct = await Products.findOne({
      where: {
        status: true,
        id,
      },
    });

    return checkProduct;
  }

  async productName(name: string) {
    const checkProduct = await Products.findOne({
      where: {
        name,
      },
    });

    return checkProduct;
  }

  async productPrice(id: string) {
    const priceProduct = await Products.findOne({
      where: {
        id,
      },
      attributes: ['price'],
    });
    return priceProduct;
  }

  async updateProduct(
    id: string,
    name: string,
    product_code: number,
    description: string,
    price: number
  ) {
    const productUpdated = await Products.update(
      {
        name,
        product_code,
        description,
        price,
        status: true,
      },
      {
        where: {
          id,
        },
      }
    );
    return productUpdated;
  }

  async disableProduct(id: string) {
    const inactiaveProduct = await Products.update(
      {
        status: 0,
      },
      {
        where: {
          id,
        },
      }
    );
    return inactiaveProduct;
  }
}
