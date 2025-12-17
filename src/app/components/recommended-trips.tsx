import { TripItem } from "@/components/trip-item";
import { Separator } from "@/components/ui/separator";
import prisma from "@/lib/prisma";

export const RecommendedTrips = async () => {
    const trips = await prisma.trip.findMany()

    return (
        <div className=" flex flex-col gap-2">
            <div className="flex items-center gap-3 w-full px-5 py-2">
                <Separator className="flex-1" />
                <h2 className=" text-sm text-gray-primary">Destinos recomendados</h2>
                <Separator className="flex-1" />
            </div>
            <div className="space-y-5 flex flex-col items-center">
                {trips.map((trip) => (
                    <TripItem key={trip.id} trip={trip} />
                ))}
            </div>
        </div>
    )
};