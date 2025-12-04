import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { AiOutlineMenu } from "react-icons/ai"
import { RiLogoutCircleRLine } from "react-icons/ri";

interface DropdownSigOutProps {
    imageSrc: string;
    userName: string;
    handleSignOutClick: () => void;
}

export function DropdownSigOut({ imageSrc, userName, handleSignOutClick }: DropdownSigOutProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full">
            <>
                <AiOutlineMenu className="size-5 text-gray-primary"/>
                <Image
                    src={imageSrc}
                    alt={userName}
                    width={28}
                    height={28}
                    className="rounded-full"
                />
            </>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit text-red-500" align="end">
        <DropdownMenuItem onClick={handleSignOutClick}>
          Sair
          <DropdownMenuShortcut>
            <RiLogoutCircleRLine className="text-red-500" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
