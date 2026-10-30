import { Trip } from "../models/trip.model.js";

export const tripRepository = {
  searchByMode: (mode, from, to) =>
    Trip.find({
      mode,
      from: { $regex: `^${from}$`, $options: "i" },
      to: { $regex: `^${to}$`, $options: "i" },
    }).sort({ departure: 1 }),

  findById: (id) => Trip.findById(id),

  save: (trip) => trip.save(),
};
