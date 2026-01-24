"use client";
import Table from "@/components/Table";
import Tage from "@/components/ui/Tage";
import { formatDate } from "@/lib/date";
import { Eye, Link } from "lucide-react";
import { useState, useEffect } from "react";

export default function page() {
  const startDate = new Date(2026, 1, 1);
  const endDate = new Date(2026, 1, 4);

  const [dates, setdates] = useState<Date[]>([]);

  useEffect(() => {
    const tempDates = [];
    let current = new Date(startDate);

    while (current <= endDate) {
      tempDates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    setdates(tempDates);
  }, []);

  return (
    <div className=" flex flex-col gap-6">
      {dates.map((date, i) => (
        <div key={i}>
          <h3 className="text-xl font-bold mb-2">{formatDate(date)}</h3>
          <Table header={null}>
            <tr>
              <td>
                <div className=" grid grid-cols-20 w-full justify-around items-center md:items-center border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 ">
                  <p className=" sm:text-xl text-left w-full font-medium">
                    12:23
                  </p>
                  <div className="text-left w-full col-span-18">
                    <p className=" sm:text-xl text-left w-full font-medium">
                      API Integration Module
                    </p>
                    <p className="text-text-secondary text-sm md:text-base">
                      Client name • Task name
                    </p>
                  </div>

                  <p className=" sm:text-xl text-left w-full font-medium">
                    <Tage title="Project" />
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className=" grid grid-cols-20 w-full justify-around items-center md:items-center border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 ">
                  <p className=" sm:text-xl text-left w-full font-medium">
                    12:23
                  </p>
                  <div className="text-left w-full col-span-18">
                    <p className=" sm:text-xl text-left w-full font-medium">
                      API Integration Module
                    </p>
                    <p className="text-text-secondary text-sm md:text-base">
                      Client name • Task name
                    </p>
                  </div>

                  <p className=" sm:text-xl text-left w-full font-medium">
                    <Tage title="Payment" />
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className=" grid grid-cols-20 w-full justify-around items-center md:items-center border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 ">
                  <p className=" sm:text-xl text-left w-full font-medium">
                    12:23
                  </p>
                  <div className="text-left w-full col-span-18">
                    <p className=" sm:text-xl text-left w-full font-medium">
                      API Integration Module
                    </p>
                    <p className="text-text-secondary text-sm md:text-base">
                      Client name • Task name
                    </p>
                  </div>

                  <p className=" sm:text-xl text-center flex justify-center  w-full font-medium">
                    <Tage title="User" />
                  </p>
                </div>
              </td>
            </tr>
          </Table>
        </div>
      ))}
    </div>
  );
}
