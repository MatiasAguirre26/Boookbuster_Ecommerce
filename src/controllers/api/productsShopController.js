
const db = require('../../database/models');
const sequelize = db.sequelize;

const productShopController = {
    'list': (req, res) => {
        db.ProductShop.findAll()
        .then(allProductShop => {
            let products_shop = [];
            allProductShop.forEach(data => {
                let product_shop = {
                    id: data.id,
                    price: data.price,
                    description: data.description,
                    stock_min: data.stock_min,
                    stock_max: data.stock_max,
                    categories_id: data.categories_id,
                    sizes_id: data.sizes_id,
                    detail_id: data.detail_id,
                    editorials_id: data.editorials_id,
                    states_id: data.states_id,
                };
                products_shop.push(product_shop);
            })
            res.status(200).json( {
                meta: {
                    status:200,
                    count: products_shop.length,
                    url: "api/products_shop"
                },
                products_shop
            })
        })
    }
}

module.exports = productShopController;