export const TripDescription = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold text-primary-darker">Sobre a viagem</h2>
      <p className="text-xs leading-5 mt-1 text-gray-primary">{description}</p>
    </div>
  );
};
