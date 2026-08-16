const products = require('../data/products.json')

const getProducts=(req,res)=>{
   res.json(products);
}

const getProductById =(req,res)=>{
  const product = products.find(
    (item)=> item.id === Number(req.params.id)
  )

  if(!product){
    return res.status(404).json({
        message:"Products Not Founds"
    });
  }
  res.json(product)
}

module.exports={
    getProducts,
  getProductById  
}