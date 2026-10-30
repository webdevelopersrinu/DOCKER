import mongoose from "mongoose";
import { connectDb } from "../config/db.js";
import { Place } from "../models/place.model.js";
import { Trip } from "../models/trip.model.js";
import { PLACES } from "./places.data.js";
import { ROUTES, AIRLINES, TRAIN_NAMES, BUS_OPERATORS, TRAIN_CLASSES } from "./routes.data.js";

function pick(arr, i) {
  return arr[i % arr.length];
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function addMinutes(hh, mm, mins) {
  const total = hh * 60 + mm + mins;
  const h = Math.floor(total / 60) % 24;
  const m = total % 60;
  return `${pad(h)}:${pad(m)}`;
}

function buildFlight(route, idx) {
  const departHour = 6 + idx * 3;
  const durationMins = 90 + idx * 15;
  const fare = 3200 + idx * 450;
  return {
    mode: "flight",
    code: `${pick(AIRLINES, idx).slice(0, 2).toUpperCase()}-${100 + idx}`,
    operatorName: pick(AIRLINES, idx),
    from: route.from,
    to: route.to,
    departure: `${pad(departHour)}:00`,
    arrival: addMinutes(departHour, 0, durationMins),
    durationMins,
    fare,
    seatsTotal: 180,
    seatsAvailable: 180,
  };
}

function buildTrain(route, idx) {
  const departHour = 5 + idx * 4;
  const durationMins = 300 + idx * 60;
  const baseFare = 450 + idx * 100;
  return {
    mode: "train",
    code: `${12700 + idx}`,
    operatorName: `${route.from.slice(0, 3).toUpperCase()} ${pick(TRAIN_NAMES, idx)}`,
    from: route.from,
    to: route.to,
    departure: `${pad(departHour)}:${idx % 2 === 0 ? "00" : "30"}`,
    arrival: addMinutes(departHour, idx % 2 === 0 ? 0 : 30, durationMins),
    durationMins,
    fare: baseFare,
    seatsTotal: 200,
    seatsAvailable: 200,
    classes: TRAIN_CLASSES.map((type, ci) => ({
      type,
      fare: baseFare + ci * 350,
      seatsAvailable: 50,
    })),
  };
}

function buildBus(route, idx) {
  const departHour = 20 + idx; // mostly overnight buses, like real India intercity buses
  const durationMins = 360 + idx * 45;
  const fare = 550 + idx * 150;
  return {
    mode: "bus",
    code: `BUS-${route.from.slice(0, 2).toUpperCase()}${route.to.slice(0, 2).toUpperCase()}-${idx + 1}`,
    operatorName: pick(BUS_OPERATORS, idx),
    from: route.from,
    to: route.to,
    departure: `${pad(departHour % 24)}:${idx % 2 === 0 ? "00" : "30"}`,
    arrival: addMinutes(departHour % 24, idx % 2 === 0 ? 0 : 30, durationMins),
    durationMins,
    fare,
    seatsTotal: 40,
    seatsAvailable: 40,
  };
}

async function run() {
  await connectDb();

  await Place.deleteMany({});
  await Trip.deleteMany({});

  await Place.insertMany(PLACES);
  console.log(`Seeded ${PLACES.length} places`);

  const trips = [];
  for (const route of ROUTES) {
    for (const mode of route.modes) {
      const perRoute = 2; // 2 departures per route/mode, enough to look real without bloating data
      for (let i = 0; i < perRoute; i++) {
        if (mode === "flight") trips.push(buildFlight(route, i));
        if (mode === "train") trips.push(buildTrain(route, i));
        if (mode === "bus") trips.push(buildBus(route, i));
      }
    }
  }

  await Trip.insertMany(trips);
  console.log(`Seeded ${trips.length} trips`);

  await mongoose.disconnect();
  console.log("Seed complete");
}

run().catch((err) => {
  console.error("Seed failed", err);
  process.exit(1);
});
