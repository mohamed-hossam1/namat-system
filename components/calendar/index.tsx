"use client";

import React, { useState } from "react";
import Header from "./Header";
import { getDate, getDaysGrid } from "@/lib/date";

export default function Calendar() {
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentData, setCurrentData] = useState(
    getDate(new Date().getFullYear(), new Date().getMonth()),
  );
  return (
    <div>
      <Header currentData={currentData} setCurrentData={setCurrentData} />
      <div className="bg-card p-5 border border-border rounded-2xl mt-4">
        <div>
          <div className="grid grid-cols-7 gap-3">
            {weeks.map((week, i) => (
              <p key={i} className="font-bold text-xl text-center py-3">
                {week}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-3">
            {getDaysGrid(currentData.year, currentData.month).map((day, i) => (
              <div
                key={i}
                className={`h-40 flex p-6 rounded-lg border ${
                  day === 0
                    ? "bg-transparent border-transparent"
                    : "bg-input border-border hover:bg-primary/10 cursor-pointer transition-all shadow-xl"
                }`}
              >
                {day !== 0 && (
                  <p className="font-semibold text-text-secondary ">{day}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
