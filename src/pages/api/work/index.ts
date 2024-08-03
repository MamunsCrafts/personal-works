import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/database/db.connection";
import Work from "@/database/schema/work.schema";
import { WorkTypeEnum } from "./enum";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      
      const {   company,
        isApply,
        workType,
        applyLink,
        applyingDate,
        isAvailable,
        deadLine,
        salary,
        stack,
        action, } = req.body as  {
        company: string; 
        isApply:boolean;
        workType: WorkTypeEnum;
        applyLink: string; 
        applyingDate: string; 
        isAvailable: boolean;
        deadLine:Date;
        salary: string;
        stack: string[]; 
        action: string; 
      };

      const date = new Date();
      const todo = await Work.create({
        company,
        isApply,
        // workType,
        applyLink,
        applyingDate,
        isAvailable,
        deadLine,
        salary,
        stack,
        action,
      });

      res.status(201).json(todo);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  } else if (req.method === "GET") {
    try {
      const { skip = 0, limit = 10 } = req.query;
      const skipNumber = parseInt(skip as string, 10);
      const limitNumber = parseInt(limit as string, 10);

      // Ensure valid skip and limit values
      if (
        isNaN(skipNumber) ||
        isNaN(limitNumber) ||
        skipNumber < 0 ||
        limitNumber <= 0
      ) {
        return res.status(400).json({ message: "Invalid skip or limit value" });
      }

      const todos = await Work.find()
        .skip(skipNumber)
        .limit(limitNumber)
        .sort({ date: -1 });
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default connectDb(handler);
