import { CheckCircle2Icon } from "lucide-react";

interface TripHighlightsProps {
  highlights: string[];
}

export const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <h2 className="font-semibold text-primary-darker">Destaques</h2>
      <div className="grid grid-cols-2 gap-1">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle2Icon size={14} className="text-blue-500" />
            <p key={index} className="text-xs leading-5 text-gray-primary">
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
