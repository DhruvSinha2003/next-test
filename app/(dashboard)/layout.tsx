import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Layout of Dashboard</h1>
      {children}
    </div>
  );
}
