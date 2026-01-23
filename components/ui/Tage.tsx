import React from "react";

export default function Tage({title}:{title:string}) {
  return (
    <span className="bg-input border border-border rounded-2xl p-1.5 text-sm block w-fit ">
      {title}
    </span>
  );
}
