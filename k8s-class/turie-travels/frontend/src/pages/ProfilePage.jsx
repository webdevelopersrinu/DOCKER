import { useRef } from "react";
import toast from "react-hot-toast";
import { UserRound } from "lucide-react";
import { useProfile, useUpdateProfile, useAddSavedPassenger } from "../features/profile/hooks/useProfile";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Button } from "../components/Button";
import { Shimmer } from "../components/Shimmer";

const GENDER_LABEL = { M: "Male", F: "Female", O: "Other" };

export default function ProfilePage() {
  const { data: profile, isLoading, isError } = useProfile();
  const updateProfile = useUpdateProfile();
  const addPassenger = useAddSavedPassenger();
  const formRef = useRef(null);

  function handleAddPassenger(e) {
    e.preventDefault();
    const form = new FormData(formRef.current);
    const name = form.get("name")?.toString().trim();
    const age = Number(form.get("age"));
    const gender = form.get("gender")?.toString();

    if (!name) return toast.error("Name is required");
    if (!Number.isInteger(age) || age < 1 || age > 120) return toast.error("Age must be between 1 and 120");
    if (!["M", "F", "O"].includes(gender)) return toast.error("Select a gender");

    addPassenger.mutate(
      { name, age, gender },
      { onSuccess: () => formRef.current?.reset() }
    );
  }

  function handlePreferenceChange(field, value) {
    updateProfile.mutate({ preferences: { ...profile.preferences, [field]: value } });
  }

  if (isLoading) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <Shimmer count={3} height="h-16" />
      </div>
    );
  }

  if (isError || !profile) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <p className="text-sm text-error">Couldn't load your profile. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 p-4">
      <section>
        <h2 className="mb-3 text-lg font-semibold text-ink">Saved passengers</h2>
        {profile.savedPassengers?.length ? (
          <div className="mb-4 flex flex-wrap gap-2">
            {profile.savedPassengers.map((p, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-ink"
              >
                <UserRound className="h-3.5 w-3.5 text-ink-soft" aria-hidden="true" />
                {p.name} · {p.age} · {GENDER_LABEL[p.gender]}
              </span>
            ))}
          </div>
        ) : (
          <p className="mb-4 text-sm text-ink-soft">No saved passengers yet.</p>
        )}

        <form ref={formRef} onSubmit={handleAddPassenger} className="grid gap-3 sm:grid-cols-[2fr_1fr_1fr_auto] sm:items-end">
          <Input label="Name" name="name" required />
          <Input label="Age" name="age" type="number" min={1} max={120} required />
          <Select label="Gender" name="gender" defaultValue="M">
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </Select>
          <Button type="submit" disabled={addPassenger.isPending} loading={addPassenger.isPending}>
            Add passenger
          </Button>
        </form>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-ink">Preferences</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Select
            label="Preferred class"
            value={profile.preferences?.preferredClass || "Sleeper"}
            onChange={(e) => handlePreferenceChange("preferredClass", e.target.value)}
          >
            <option value="Sleeper">Sleeper</option>
            <option value="AC">AC</option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
          </Select>
          <Select
            label="Seat preference"
            value={profile.preferences?.seatPreference || "Window"}
            onChange={(e) => handlePreferenceChange("seatPreference", e.target.value)}
          >
            <option value="Window">Window</option>
            <option value="Aisle">Aisle</option>
            <option value="Middle">Middle</option>
          </Select>
        </div>
      </section>
    </div>
  );
}
