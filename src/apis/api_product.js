const router = require('express').Router()
const model = require('../models')

//Get All Product
router.get('/product/all', async (req, res)=>{
    const productos = await model.PRODUCTO.findAll()
    res.json(productos)
})


//Create New Product

router.post('/product', async (req, res)=>{
    const {
        title,
        details,
        price,
        color
    } = req.body

    await model.PRODUCTO.create({title: title, details: details, price: price, color:color})
    .then( () => res.status(200).json({
        "message": "product save succesfull"
    }))
    .catch(error => res.status(404).json({
        "title": "Error",
        "message": error
    }))
})

// Get Product Id
router.get('/product/:id', async (req, res)=>{ 
    const producto = await model.PRODUCTO.findOne({where: {id:req.params.id}})
    res.json(producto)
})

//Delete Product
router.delete('/product/:id', async (req, res)=>{ 
    await model.PRODUCTO.destroy({where: {id:req.params.id}})
    .then(()=>{res.status(200).json({
        message: "Product deleted"
    })})
    .catch(error=>{
        res.status(400).json("No found")
        console.log(error)
    })
})

//Upadate Product

router.put('/product/:id', async(req, res)=>{
    const {
        title,
        price,
        color,
        details
    } = req.body
    await model.PRODUCTO.update({title: title, price: price, color: color, details: details},{where:{id: req.params.id}})
    .then(()=>{res.json("updated successfull product")})
    .catch((error)=>{res.status(404).json({
        message:error
    })})
} )


module.exports = router