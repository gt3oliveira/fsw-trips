import { FormateCurrency } from "@/hooks/formate-currency";
import prisma from "@/lib/prisma";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { TripReservation } from "./components/trip-reservation";
import { Separator } from "@/components/ui/separator";
import { TripDescription } from "./components/trip-description";
import { TripHighlights } from "./components/trip-highlights";
import { TripLocation } from "./components/trip-location";

const getTripById = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  return trip;
};

export default async function TripDetails({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = await params;
  const trip = await getTripById(tripId);
  if (!trip) return null;

  return (
    <div className="container mx-auto">
      <Image
        src={trip.coverImage}
        alt={trip.name}
        width={800}
        height={0}
        className="w-full sm:object-cover sm:h-[400px]"
      />
      <div className="flex flex-col p-5">
        <h1 className="font-semibold text-xl text-primary-darker">
          {trip.name}
        </h1>
        <div className="flex items-center gap-1 my-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg={true} />
          <p className="text-xs text-gray-primary underline">{trip.location}</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-xs text-g-primary font-semibold">
            {FormateCurrency(trip.pricePerDayInCents)}
          </p>
          <p className="text-xs text-gray-primary">por dia</p>
        </div>

        <div className="space-y-4 flex flex-col mt-4">
          <TripReservation trip={trip} />
          <Separator />
          <TripDescription description={trip.description} />
          <TripHighlights highlights={trip.highlights} />
          <TripLocation
            location={trip.location}
            locationDescription={trip.locationDescription}
          />
        </div>
      </div>
    </div>
  );
}
