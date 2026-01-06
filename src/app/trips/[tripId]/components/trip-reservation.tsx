"use client";
import Input from "@/components/input";
import { Button } from "@/components/ui/button";
import { Trip } from "@/generated/prisma/client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { DatePicker } from "@/components/date-picker";
import { format } from "date-fns";

const formSchema = z
  .object({
    startDate: z.string().min(1, "Data inicial é obrigatória"),
    endDate: z.string().min(1, "Data final é obrigatória"),
    guests: z.string().min(1, "Deve haver ao menos 1 hóspede."),
  })
  .superRefine((data, ctx) => {
    if (data.startDate && data.endDate) {
      if (new Date(data.endDate) <= new Date(data.startDate)) {
        ctx.addIssue({
          path: ["endDate"],
          code: z.ZodIssueCode.custom,
          message: "Data final deve ser maior que a data inicial",
        });
      }
    }
  });

type FormSchema = z.infer<typeof formSchema>;

interface TripReservationProps {
  trip: Trip;
}

export const TripReservation = ({ trip }: TripReservationProps) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startDate: "",
      endDate: "",
      guests: "",
    },
  });

  const startDate = form.watch("startDate");

  function onSubmit(values: FormSchema) {
    if (Number(values.guests) > trip.maxGuests) {
      form.setError("guests", {
        message: `Número máximo de hóspedes é ${trip.maxGuests}`,
      });
      return;
    }

    console.log(
      format(new Date(values.startDate), "yyyy-MM-dd"),
      format(new Date(values.endDate), "yyyy-MM-dd"),
      values.guests
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <DatePicker
                      date={field.value ? new Date(field.value) : undefined}
                      setDate={(date) => {
                        field.onChange(date ? date.toISOString() : "");
                      }}
                      placeholder="Data inicial"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <DatePicker
                      placeholder="Data final"
                      date={field.value ? new Date(field.value) : undefined}
                      setDate={(date) => {
                        field.onChange(date ? date.toISOString() : "");
                      }}
                      startDate={startDate ? new Date(startDate) : undefined}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between">
            <p className="font-medium text-sm text-primary-darker">Total: </p>
            <p className="font-medium text-sm text-primary-darker">
              R$ 2.500,00
            </p>
          </div>

          <Button type="submit" className="w-full">
            Reservar agora
          </Button>
        </form>
      </Form>
    </div>
  );
};
