import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ShieldCheck, Clock, BadgeIndianRupee } from "lucide-react";
import { SearchWidget } from "../features/search/components/SearchWidget";

function unsplash(id, w, h) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=75`;
}

const DESTINATIONS = [
  { city: "Hyderabad", landmark: "Charminar", image: unsplash("photo-1696941515998-d83f24967aca", 500, 400) },
  { city: "Bangalore", landmark: "Vidhana Soudha", image: unsplash("photo-1698332137428-3c4296198e8f", 500, 400) },
  { city: "Mumbai", landmark: "Gateway of India", image: unsplash("photo-1570168007204-dfb528c6958f", 500, 400) },
  { city: "Delhi", landmark: "India Gate", image: unsplash("photo-1587474260584-136574528ed5", 500, 400) },
  { city: "Chennai", landmark: "Marina Beach", image: unsplash("photo-1724992609079-75164f1ba2dd", 500, 400) },
  { city: "Jaipur", landmark: "Hawa Mahal", image: unsplash("photo-1477587458883-47145ed94245", 500, 400) },
];

const VALUE_PROPS = [
  { Icon: ShieldCheck, label: "Verified operators" },
  { Icon: Clock, label: "Instant confirmation" },
  { Icon: BadgeIndianRupee, label: "Best fares" },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("buses");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function handleSubmit() {
    navigate(`/search?mode=${mode}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-ink-900 px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-script text-2xl text-on-accent/80">Travel across India</p>
            <h1 className="mt-2 font-display text-4xl text-on-accent sm:text-5xl">Find your next journey</h1>
            <p className="mt-3 max-w-md text-on-accent/70">
              Compare flights, trains and buses across India and book in minutes, with real seat
              availability and transparent fares.
            </p>

            <div className="mt-8">
              <SearchWidget
                mode={mode}
                from={from}
                to={to}
                onModeChange={setMode}
                onFromChange={setFrom}
                onToChange={setTo}
                onSubmit={handleSubmit}
              />
            </div>
          </div>

          <div className="relative hidden h-96 lg:block" aria-hidden="true">
            <img
              src={unsplash("photo-1532664189809-02133fee698d", 420, 520)}
              alt=""
              className="absolute left-4 top-4 w-64 rounded-2xl object-cover shadow-2xl"
              style={{ height: "320px" }}
            />
            <img
              src={unsplash("photo-1519955266818-0231b63402bc", 320, 220)}
              alt=""
              className="absolute right-0 top-0 w-52 rounded-2xl object-cover shadow-2xl transition-transform duration-300 hover:-translate-y-1"
              style={{ height: "160px" }}
            />
            <img
              src={unsplash("photo-1517330357046-3ab5a5dd42a1", 300, 260)}
              alt=""
              className="absolute bottom-0 right-10 w-44 rounded-2xl object-cover shadow-2xl transition-transform duration-300 hover:-translate-y-1"
              style={{ height: "190px" }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-2xl text-ink">Popular destinations</h2>
        <p className="mt-1 text-ink-soft">Jump straight into a search for these popular routes.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <button
              key={d.city}
              type="button"
              onClick={() => navigate(`/search?mode=buses&to=${encodeURIComponent(d.city)}`)}
              className="group relative h-48 overflow-hidden rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <img
                src={d.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/15 to-transparent" />
              <div className="absolute bottom-3 left-4 text-on-accent">
                <span className="flex items-center gap-1.5 font-semibold">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {d.city}
                </span>
                <span className="text-xs text-on-accent/75">{d.landmark}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 rounded-xl border border-border bg-surface p-6 sm:grid-cols-3">
          {VALUE_PROPS.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="font-medium text-ink">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
