import { getNextMonth, getPrevMonth } from "@/lib/date";
import { ArrowLeft, ArrowRight, Calendar1 } from "lucide-react";

interface HeaderProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

export default function Header({ currentDate, setCurrentDate }: HeaderProps) {
  const currentData = {
    year: currentDate.getFullYear(),
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][currentDate.getMonth()],
  };

  const nextMonth = () => {
    const next = new Date(currentDate);
    next.setMonth(next.getMonth() + 1);
    setCurrentDate(next);
  };
  const prevMonth = () => {
    const prev = new Date(currentDate);
    prev.setMonth(prev.getMonth() - 1);
    setCurrentDate(prev);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 flex-col">
        <p className="font-bold text-2xl">
          {currentData.month} {currentData.year}
        </p>
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="pr-2 pl-1 py-1 cursor-pointer bg-input border border-border rounded-lg flex items-center gap-1 hover:bg-input/50 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Prev
          </button>
          <button
            onClick={nextMonth}
            className="pl-2 pr-1 py-1 cursor-pointer bg-input border border-border rounded-lg flex items-center gap-1 hover:bg-input/50 transition-all duration-300"
          >
            Next
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <button className="cursor-pointer transform duration-300 font-semibold px-4 py-2 md:px-4 md:py-2 h-fit text-lg text-text-color bg-primary-gradient rounded-2xl border flex items-center shadow-button/70 hover:shadow-button-hover justify-center">
        <Calendar1 size={18} />
        <p className="ml-1">Add Event</p>
      </button>
    </div>
  );
}
