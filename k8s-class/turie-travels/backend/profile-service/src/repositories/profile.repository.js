import { Profile } from "../models/profile.model.js";

// Controllers/services never touch Mongoose directly — only through here.
export const profileRepository = {
  findByUserId: (userId) => Profile.findOne({ userId }),
  create: (userId) => Profile.create({ userId }),
  save: (profile) => profile.save(),
};
