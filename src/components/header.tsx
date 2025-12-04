'use client';
import Image from "next/image";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { DropdownSigOut } from "./dropdown-signout";

export const Header = () => {
  const { status, data } = useSession();
  const handleLoginClick = () => signIn();
  const handleSignOutClick = () => signOut();

  return (
    <div className="container mx-auto p-5 flex items-center justify-between">
      <Image
        src="/logo.svg"
        alt="FSW Trips Logo"
        width={183}
        height={32}
      />

      {status === "unauthenticated" ? (
        <Button onClick={handleLoginClick}
        variant={"ghost"}
        className="text-g-primary font-semibold rounded-full"
      >
        Login
      </Button>
      ) : (
        <DropdownSigOut
          imageSrc={data?.user?.image || "https://github.com/shadcn.png"}
          userName={data?.user?.name || ""}
          handleSignOutClick={handleSignOutClick}
        />
      )}
    </div>
  )
};