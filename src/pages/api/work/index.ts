import { NextApiRequest, NextApiResponse } from "next"
import connectDb from "@/database/db.connection"
import Work from "@/database/schema/work.schema"
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {

     const { title, type, topics, status, createDate } = req.body as {
       title: string
       type: string
       url: string
       createDate: string
       topics: string[]
       status: string
     }
      


    const date = new Date()
      const todo = await Work.create({ title, type, date,createDate, topics ,status})

      res.status(201).json(todo)
    } catch (error) {
      res.status(400).json({ message: error })
    }
  } else if (req.method === "GET") {
    try {
      const todos = await Work.find().sort({ date: -1 })
      res.status(200).json(todos)
    } catch (error) {
      res.status(400).json({ message: error })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}

export default connectDb(handler)