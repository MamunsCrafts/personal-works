import mongoose from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"

const connectDb = (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res)
  }
  const URL = process.env.MONGODB_URL||"Opps";
  console.log(URL,"I am connected");
  await mongoose.connect(URL);
  return handler(req, res)
}
export default connectDb