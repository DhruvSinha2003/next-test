import React from "react";

export default function page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      <h1>USER DETAILS =&gt; {id}</h1>
    </div>
  );
}
