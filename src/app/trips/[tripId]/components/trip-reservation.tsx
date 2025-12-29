"use client";
import { DatePicker } from "@/components/date-picker";
import Input from "@/components/input";
import { Button } from "@/components/ui/button";
import { Trip } from "@/generated/prisma/client";

interface TripReservationProps {
  trip: Trip;
}

export const TripReservation = ({ trip }: TripReservationProps) => {
  return (
    <div className="flex flex-col space-y-4 mt-4">
      <div className="flex gap-4">
        <DatePicker placeholder="Data inicial" />
        <DatePicker placeholder="Data final" />
      </div>
      <Input
        placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
        type="number"
      />

      <div className="flex justify-between">
        <p className="font-medium text-sm text-primary-darker">Total: </p>
        <p className="font-medium text-sm text-primary-darker">R$ 2.500,00</p>
      </div>

      <Button>Reservar agora</Button>
    </div>
  );
};
