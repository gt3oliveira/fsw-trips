import { QuickSearch } from "./components/quick-search";
import { RecommendedTrips } from "./components/recommended-trips";
import { TripSearch } from "./components/trip-search";

export default function Home() {
  return (
    <div className="space-y-5 mb-5">
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  );
}
