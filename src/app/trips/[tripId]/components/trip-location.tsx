import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TripLocationProps {
  location: string;
  locationDescription: string;
}

export const TripLocation = ({
  location,
  locationDescription,
}: TripLocationProps) => {
  return (
    <div className="space-y-3">
      <h2 className="font-semibold text-primary-darker">Localização</h2>
      <Image
        src="/Map.svg"
        alt="Map Location"
        width={800}
        height={400}
        className="rounded-md mb-4 w-full"
      />
      <p className="font-semibold text-sm">{location}</p>
      <p className="text-xs leading-5 mt-1 text-gray-primary">
        {locationDescription}
      </p>
      <Button
        className="w-full text-g-primary font-semibold border-2 border-g-primary"
        variant={"outline"}
      >
        Ver no Google Maps
      </Button>
    </div>
  );
};
