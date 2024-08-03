import { WorkTypeEnum } from "@/pages/api/work/enum"
import mongoose, { Document } from "mongoose"


export interface Work extends Document {
  title: string
  type: WorkTypeEnum
  url: string
  createDate:string
  date: { type: Date }
  topics: string[]
  status: string
}

const WorkSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  type: { type: String, default: "" },
  url: { type: String, default: "" },
  date: {
    type: Date,
    default: () => new Date().toLocaleDateString(),
  },
   createDate:{
    type:String,
   },
  topics: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    enum: ["Pending", "Learning", "Done"],
    default: "Pending",
  },
})

export default mongoose.models.Work || mongoose.model<Work>("Work", WorkSchema)