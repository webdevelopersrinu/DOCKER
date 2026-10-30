import { profileRepository } from "../repositories/profile.repository.js";
import { ApiError } from "../utils/apiError.js";

export async function findOrCreate(userId) {
  let profile = await profileRepository.findByUserId(userId);
  if (!profile) profile = await profileRepository.create(userId);
  return profile;
}

export async function getProfile(userId) {
  return findOrCreate(userId);
}

export async function updateProfile(userId, { preferences }) {
  const profile = await findOrCreate(userId);
  if (preferences) profile.preferences = { ...profile.preferences, ...preferences };
  await profileRepository.save(profile);
  return profile;
}

export async function addPassenger(userId, passengerData) {
  if (!passengerData?.name || !passengerData?.age || !passengerData?.gender) {
    throw new ApiError(400, "name, age, gender are required");
  }
  const profile = await findOrCreate(userId);
  profile.savedPassengers.push(passengerData);
  await profileRepository.save(profile);
  return profile;
}
