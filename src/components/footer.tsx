import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-walter-white p-5 w-full space-y-1 justify-center flex flex-col items-center">
      <Link href="/">
        <Image src="/logo.svg" alt="FSW Trips" width={133} height={23} />
      </Link>
      <p className="text-center text-sm text-primary-darker font-semibold">
        Todos os direitos reservados
      </p>
    </div>
  );
};
