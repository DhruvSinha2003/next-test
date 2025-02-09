import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>USERS</h1>

      <ul className="mt-10">
        <li className="mt-2">
          <Link href="/dashboard/users/1"> User 1</Link>
        </li>
        <li className="mt-2">
          <Link href="/dashboard/users/2"> User 2</Link>
        </li>
        <li className="mt-2">
          <Link href="/dashboard/users/3"> User 3</Link>
        </li>
        <li className="mt-2">
          <Link href="/dashboard/users/4"> User 4</Link>
        </li>
      </ul>
    </div>
  );
}
