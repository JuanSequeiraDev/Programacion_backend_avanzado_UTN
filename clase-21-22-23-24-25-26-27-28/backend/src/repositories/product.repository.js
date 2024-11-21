import Product from "../models/products.model.js";




//Capa logica de nuestra aplicacion para comunicar con la DB
class ProductRepository{
    static async createProduct ( new_product_data ) {
        const new_product = new Product(new_product_data)
        return await new_product.save()
    }

    static async updateProduct ( product_id, updated_data) {
        return Product.findByIdAndUpdate(product_id, updated_data)
    }

    static async getAllProducts ( ) {
        return Product.find({active: true})
    }

    static async getById (product_id ) {
        return Product.findById(product_id)
    }

    static async deleteProduct( product_id ) {
        //El {new: true} indica que debe devolver el producto actualizado
        return Product.findByIdAndDelete(product_id, {active: false}, {new: true})
    }
}

export default ProductRepository