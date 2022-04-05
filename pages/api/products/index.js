import dbConect from "../../../util/mongo";
import Product from "../../../models/Product"

export default async function handler(req,res){
  const { method } = req;

  await dbConect();

  if (method === "GET") {
    
  }
  
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product)
    } catch (error) {
      res.status(500).json(error)

      console.log(error)
    }
  }
}