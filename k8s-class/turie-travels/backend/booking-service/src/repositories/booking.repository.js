import { Booking } from "../models/booking.model.js";

export const bookingRepository = {
  create: (data) => Booking.create(data),

  findByUser: (userId) => Booking.find({ userId }).sort({ createdAt: -1 }),

  findOneByUserAndId: (userId, id) => Booking.findOne({ _id: id, userId }),

  save: (booking) => booking.save(),
};
