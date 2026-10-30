import { Place } from "../models/place.model.js";

export const placeRepository = {
  search: (q) => {
    const filter = q ? { name: { $regex: q, $options: "i" } } : {};
    return Place.find(filter).sort({ name: 1 }).limit(20);
  },
};
