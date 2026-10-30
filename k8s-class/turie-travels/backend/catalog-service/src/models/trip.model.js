import mongoose from "mongoose";

// One schema for flights/trains/buses ("mode") — fields not used by a mode are just left blank.
// e.g. flights use flightNumber+airline, trains use trainNumber+trainName+classes, buses use operator+busType.
const tripSchema = new mongoose.Schema(
  {
    mode: { type: String, enum: ["flight", "train", "bus"], required: true },
    code: { type: String, required: true }, // flightNumber / trainNumber / bus service number
    operatorName: { type: String, required: true }, // airline / trainName / bus operator
    from: { type: String, required: true },
    to: { type: String, required: true },
    departure: { type: String, required: true }, // "HH:mm"
    arrival: { type: String, required: true }, // "HH:mm"
    durationMins: { type: Number, required: true },
    fare: { type: Number, required: true }, // base fare; trains may override per class
    seatsTotal: { type: Number, required: true },
    seatsAvailable: { type: Number, required: true },
    classes: [
      {
        type: { type: String }, // e.g. Sleeper, 3A, 2A for trains; Economy/Business for flights
        fare: Number,
        seatsAvailable: Number,
      },
    ],
  },
  { timestamps: true }
);

tripSchema.index({ mode: 1, from: 1, to: 1 });

export const Trip = mongoose.model("Trip", tripSchema);
