import dbConect from "../../../util/mongo";
import Product from "../../../models/Product"

export default async function handler(req,res){
  const { method, query:{id}, cookies } = req;

  const token = cookies.token;

  await dbConect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error)
    }
  }
  
  if (method === "PUT") {
    if (!token || token !== process.env.TOKEN){
      return res.status(401).json("Not authenticated!")     
    }
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product)
    } catch (error) {
      res.status(500).json(error)

      console.log(error)
    }
  }

  if (method === "DELETE") {
    if (!token || token !== process.env.TOKEN){
      return res.status(401).json("Not authenticated!")     
    }
    try {
      await Product.findByIdAndDelete(id)
      res.status(200).json({message:"O produto foi excluído"})
    } catch (error) {
      res.status(500).json(error)

      console.log(error)
    }
  }
}