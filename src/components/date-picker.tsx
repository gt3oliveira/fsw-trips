"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  placeholder?: string;
  startDate?: Date;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export function DatePicker({
  placeholder,
  startDate,
  date,
  setDate,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-3 w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full justify-between font-normal focus:ring-1 focus:ring-g-primary"
          >
            {date ? (
              date.toLocaleDateString()
            ) : (
              <p className="text-dark">{placeholder}</p>
            )}
            <ChevronDownIcon className={date ? "" : "text-dark"} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            disabled={(date) =>
              startDate
                ? date <= startDate
                : date < new Date(new Date().setHours(0, 0, 0, 0))
            }
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
