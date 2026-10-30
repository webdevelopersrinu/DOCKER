import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserPlus, Trash2 } from "lucide-react";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Button } from "../../../components/Button";

const passengerSchema = z.object({
  passengers: z
    .array(
      z.object({
        name: z.string().min(1, "Name is required"),
        age: z.coerce.number().int("Age must be a whole number").min(1, "Age must be between 1 and 120").max(120, "Age must be between 1 and 120"),
        gender: z.enum(["M", "F", "O"]),
      })
    )
    .min(1),
  paymentMethod: z.enum(["UPI", "CARD", "NETBANKING"]),
});

export function PassengerForm({ onSubmit, isSubmitting }) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passengerSchema),
    defaultValues: {
      passengers: [{ name: "", age: "", gender: "M" }],
      paymentMethod: "UPI",
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "passengers" });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        {fields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-1 gap-3 rounded-lg border border-border p-4 sm:grid-cols-[2fr_1fr_1fr_auto] sm:items-start">
            <Input
              label="Name"
              {...register(`passengers.${index}.name`)}
              error={errors.passengers?.[index]?.name?.message}
            />
            <Input
              label="Age"
              type="number"
              min={1}
              max={120}
              {...register(`passengers.${index}.age`)}
              error={errors.passengers?.[index]?.age?.message}
            />
            <Controller
              control={control}
              name={`passengers.${index}.gender`}
              render={({ field: genderField }) => (
                <Select label="Gender" {...genderField} error={errors.passengers?.[index]?.gender?.message}>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </Select>
              )}
            />
            <Button
              type="button"
              variant="ghost"
              className="mt-7 shrink-0 px-2.5"
              onClick={() => remove(index)}
              disabled={fields.length === 1}
              aria-label="Remove passenger"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        ))}
      </div>

      <Button
        type="button"
        variant="secondary"
        className="self-start"
        onClick={() => append({ name: "", age: "", gender: "M" })}
      >
        <UserPlus className="h-4 w-4" aria-hidden="true" /> Add passenger
      </Button>

      <Controller
        control={control}
        name="paymentMethod"
        render={({ field }) => (
          <Select label="Payment method" {...field}>
            <option value="UPI">UPI</option>
            <option value="CARD">Card</option>
            <option value="NETBANKING">Net banking</option>
          </Select>
        )}
      />

      <Button type="submit" loading={isSubmitting} disabled={isSubmitting} className="w-full sm:w-auto">
        Confirm booking
      </Button>
    </form>
  );
}
