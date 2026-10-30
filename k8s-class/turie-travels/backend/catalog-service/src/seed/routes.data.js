// Popular routes to seed, with which transport modes to generate for each.
export const ROUTES = [
  { from: "Hyderabad", to: "Bangalore", modes: ["flight", "train", "bus"] },
  { from: "Hyderabad", to: "Vizianagaram", modes: ["train", "bus"] },
  { from: "Hyderabad", to: "Vijayawada", modes: ["train", "bus"] },
  { from: "Hyderabad", to: "Visakhapatnam", modes: ["flight", "train", "bus"] },
  { from: "Hyderabad", to: "Chennai", modes: ["flight", "train", "bus"] },
  { from: "Hyderabad", to: "Mumbai", modes: ["flight", "train"] },
  { from: "Hyderabad", to: "Delhi", modes: ["flight", "train"] },
  { from: "Bangalore", to: "Chennai", modes: ["train", "bus"] },
  { from: "Bangalore", to: "Mysore", modes: ["train", "bus"] },
  { from: "Bangalore", to: "Mumbai", modes: ["flight", "train"] },
  { from: "Bangalore", to: "Mangalore", modes: ["train", "bus"] },
  { from: "Chennai", to: "Coimbatore", modes: ["train", "bus"] },
  { from: "Chennai", to: "Madurai", modes: ["train", "bus"] },
  { from: "Mumbai", to: "Pune", modes: ["train", "bus"] },
  { from: "Mumbai", to: "Delhi", modes: ["flight", "train"] },
  { from: "Mumbai", to: "Ahmedabad", modes: ["flight", "train", "bus"] },
  { from: "Delhi", to: "Jaipur", modes: ["train", "bus"] },
  { from: "Delhi", to: "Lucknow", modes: ["flight", "train"] },
  { from: "Delhi", to: "Chandigarh", modes: ["train", "bus"] },
  { from: "Kolkata", to: "Delhi", modes: ["flight", "train"] },
  { from: "Kolkata", to: "Bhubaneswar", modes: ["train", "bus"] },
  { from: "Ahmedabad", to: "Surat", modes: ["train", "bus"] },
  { from: "Kochi", to: "Thiruvananthapuram", modes: ["train", "bus"] },
  { from: "Bhopal", to: "Indore", modes: ["train", "bus"] },
  { from: "Patna", to: "Varanasi", modes: ["train", "bus"] },
  { from: "Guwahati", to: "Kolkata", modes: ["flight", "train"] },
];

export const AIRLINES = ["IndiGo", "Air India", "SpiceJet", "Akasa Air", "Vistara"];
export const TRAIN_NAMES = ["Garib Rath Express", "Shatabdi Express", "Duronto Express", "Superfast Express", "Jan Shatabdi"];
export const BUS_OPERATORS = ["APSRTC", "KSRTC", "Orange Travels", "SRS Travels", "VRL Travels", "Kaveri Travels"];
export const TRAIN_CLASSES = ["Sleeper", "3A", "2A", "1A"];
