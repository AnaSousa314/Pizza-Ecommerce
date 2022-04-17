import dbConect from "../../../util/mongo";
import Order from "../../../models/Orders"

const handler = async (req,res)=>{
  const {method, query:{id}} = req;

  await dbConect();

  if(method === "GET") {
      try {
        const order = await Order.findById(id);
        res.status(200).json(order);
      } catch (error) {
        res.status(500).json(error)
      }
  }
  
  if(method === "PUT") {
      
  }

  if(method === "DELETE") {
      
  }
}

export default handler;