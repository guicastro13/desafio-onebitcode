const Products = require('../models/Products');

module.exports = {
    async store(req, res){
        const { name, value, images_show, text_alt, category, genger, description } = req.body;
        const product = await Products.create({ name, value, images_show, text_alt, category, genger, description });
        return res.json(product);
    },
    async index(req, res){
        const products = await Products.findAll();
        return res.json(products);
    },
    async search(req, res){
        const id  = req.params.id
        console.log(id)
        const product = await Products.findByPk(id)
        return res.json(product)
    },
    async put(req, res){
        const { name, value, images_show, text_alt, category, genger, description } = req.body;
        await Products.update(
            { name, value, images_show, text_alt,category, genger, description },
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