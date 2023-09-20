import mongoose from "mongoose";

const { Schema } = mongoose;

const memberSchema = new Schema({
  name: String,
  age: Number,
  role: String,
});

export const Member = mongoose.model("Member", memberSchema);
