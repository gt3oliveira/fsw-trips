import { Trip } from "@/generated/prisma/client";
import { FormateCurrency } from "@/hooks/formate-currency";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

interface TripItemProps {
    trip: Trip
}

export const TripItem = ({ trip }: TripItemProps) => {
  return (
    <div className="flex flex-col">
        <Image
            src={trip.coverImage}
            alt={trip.name}
            width={400}
            height={400}
            className="rounded-lg shadow-md"
        />
        <h3 className="text-primary-darker font-medium text-sm mt-2">{trip.name}</h3>
        <div className="flex items-center gap-1 my-1">
            <ReactCountryFlag countryCode={trip.countryCode} svg={true} />
            <p className="text-xs text-gray-primary">{trip.location}</p>
        </div>
        <div className="flex items-center gap-1">
            <p className="text-xs text-g-primary font-semibold">{FormateCurrency(trip.pricePerDayInCents)}</p>
            <p className="text-xs text-gray-primary">por dia</p>
        </div>
    </div>
  )
};