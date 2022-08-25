const Products = require('../models/Products');

module.exports = {
    async store(req, res){
        const { name, value } = req.body;
        const product = await Products.create({ name, value });
        return res.json(product);
    },
    async index(req, res){
        const products = await Products.findAll();
        return res.json(products);
    },
    async put(req, res){
        const { name, value } = req.body;
        await Products.update(
            { name, value },
            { where:{
                id: req.params.id
            }}
        )
        return res.send('Product sucessfully updated!')
    },
    async delete(req, res) {
        await Products.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.send('Product sucessfully deleted!')
    }
};