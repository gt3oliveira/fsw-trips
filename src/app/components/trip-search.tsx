'use client'
import CurrencyInput from "@/components/currency-input";
import { DatePicker } from "@/components/date-picker";
import Input from "@/components/input";

export const TripSearch = () => {
  return (
  <div className="container mx-auto p-5">
    <h1 className="font-semibold text-2xl text-primary-darker text-center">
        Encontre sua <span className="text-g-primary">viagem!</span>
    </h1>
    <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" />
        <div className="flex gap-4">
            <DatePicker />
            <CurrencyInput placeholder="Orcamento" />
        </div>
    </div>
  </div>
  )
};