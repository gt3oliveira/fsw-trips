import { Separator } from "@/components/ui/separator"
import Image from "next/image";

export const QuickSearch = () => {
    return (
        <div className=" flex flex-col gap-2">
            <div className="flex items-center gap-3 w-full px-5">
                <Separator className="flex-1" />
                <h2 className=" text-sm text-gray-primary">Tente pesquisar por</h2>
                <Separator className="flex-1" />
            </div>
            <div className="flex w-full justify-around items-center">
                <div className="flex flex-col">
                    <Image src="/Hotel.svg" alt="hotel" width={0} height={0} className="mx-auto size-10" />
                    <p className=" text-center text-gray-primary text-xs">Hotel</p>
                </div>
                <div className="flex flex-col">
                    <Image src="/Farm.svg" alt="hotel" width={0} height={0} className="mx-auto size-10" />
                    <p className=" text-center text-gray-primary text-xs">Fazenda</p>
                </div>
                <div className="flex flex-col">
                    <Image src="/Cabin.svg" alt="hotel" width={0} height={0} className="mx-auto size-10" />
                    <p className=" text-center text-gray-primary text-xs">Chalé</p>
                </div>
                <div className="flex flex-col">
                    <Image src="/Raid.svg" alt="hotel" width={0} height={0} className="mx-auto size-10" />
                    <p className=" text-center text-gray-primary text-xs">Pousada</p>
                </div>
            </div>
        </div>
    )
};