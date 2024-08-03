import { WorkTypeEnum } from "@/pages/api/work/enum"
import mongoose, { Document } from "mongoose"


export interface Work extends Document {
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
}
const WorkSchema =  new mongoose.Schema({
  company: {
    type: String,
    default: '',
    required: true,
  },
  workType: {
    type: String,
    enum: Object.values(WorkTypeEnum),
    default: WorkTypeEnum.WORK,
    required: true},
  isApply: {
    type: Boolean,
    
    default:false 
  },
  applyLink: {
    type: String,
    
    // required: true,
  },
  applyingDate: {
    type: Date,
    default: '',
    // required: true,
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
  deadLine: {
    type: Date,
  
  },
  salary: {
    type: String,
    default: '',
    // required: true,
  },
  stack: {
    type: [String],
    default: [],
  },
  action: {
    type: String,
    default: '',
    // required: true,
  },
});

export default mongoose.models.Work || mongoose.model<Work>("Work", WorkSchema)