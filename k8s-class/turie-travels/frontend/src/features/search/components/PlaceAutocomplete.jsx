import { useId, useRef, useState } from "react";
import { usePlaces } from "../hooks/usePlaces";

// Live-reactive by nature (suggestions update as you type) — the justified
// exception to the uncontrolled-input default.
export function PlaceAutocomplete({ label, value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputId = useId();
  const listboxId = useId();
  const blurTimer = useRef(null);

  const { data: places = [], isFetching } = usePlaces(value);

  function selectPlace(name) {
    onChange(name);
    setOpen(false);
    setActiveIndex(-1);
  }

  function handleKeyDown(e) {
    if (!open || places.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, places.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      selectPlace(places[activeIndex].name);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div className="relative flex min-w-0 flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={inputId}
        role="combobox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-autocomplete="list"
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          // small delay so a click on a suggestion registers before we close the list
          blurTimer.current = setTimeout(() => setOpen(false), 120);
        }}
        onKeyDown={handleKeyDown}
        className="min-h-11 w-full min-w-0 rounded-lg border border-border bg-surface px-3.5 text-sm text-ink placeholder:text-ink-soft
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      />
      {open && value.trim() && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute top-full z-20 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-border bg-surface-elevated py-1 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
        >
          {isFetching && <li className="px-3.5 py-2 text-sm text-ink-soft">Searching…</li>}
          {!isFetching && places.length === 0 && (
            <li className="px-3.5 py-2 text-sm text-ink-soft">No places found</li>
          )}
          {places.map((place, i) => (
            <li
              key={place._id}
              role="option"
              aria-selected={i === activeIndex}
              onMouseDown={() => selectPlace(place.name)}
              className={`cursor-pointer px-3.5 py-2 text-sm ${i === activeIndex ? "bg-brand-50 text-accent" : "text-ink hover:bg-background"}`}
            >
              {place.name} <span className="text-ink-soft">· {place.state}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
