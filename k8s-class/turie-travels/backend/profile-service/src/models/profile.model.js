import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    savedPassengers: [
      {
        name: String,
        age: Number,
        gender: { type: String, enum: ["M", "F", "O"] },
      },
    ],
    preferences: {
      preferredClass: { type: String, default: "Sleeper" },
      seatPreference: { type: String, default: "Window" },
    },
  },
  { timestamps: true }
);

export const Profile = mongoose.model("Profile", profileSchema);
