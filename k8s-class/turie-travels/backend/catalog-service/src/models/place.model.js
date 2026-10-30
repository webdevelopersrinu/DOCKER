import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  state: { type: String, required: true },
});

export const Place = mongoose.model("Place", placeSchema);
