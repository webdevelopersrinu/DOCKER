// Mock data instead of a database — 100 deterministic users.
const FIRST = ["Aarav", "Vivaan", "Aditya", "Diya", "Ananya", "Ishaan", "Meera", "Kiran", "Ravi", "Sneha"];
const LAST = ["Sharma", "Reddy", "Patel", "Iyer", "Khan", "Das", "Nair", "Gupta", "Rao", "Verma"];
const CITIES = ["Hyderabad", "Bengaluru", "Chennai", "Mumbai", "Delhi"];

const users = Array.from({ length: 100 }, (_, i) => {
  const id = i + 1;
  const name = `${FIRST[i % 10]} ${LAST[Math.floor(i / 10)]}`;
  return {
    id,
    name,
    email: `${name.toLowerCase().replace(" ", ".")}${id}@example.com`,
    age: 20 + (i % 40),
    city: CITIES[i % 5],
  };
});

export function findAll({ skip, limit }) {
  return users.slice(skip, skip + limit);
}

export function count() {
  return users.length;
}
