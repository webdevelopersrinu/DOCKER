import { User } from "../models/user.model.js";

// Controllers/services never touch Mongoose directly — only through here.
export const userRepository = {
  findByEmail: (email) => User.findOne({ email: email.toLowerCase() }),
  findById: (id) => User.findById(id),
  create: (data) => User.create(data),
};
