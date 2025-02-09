import React from "react";

export default async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  type Album = { id: number; userid: number; title: string };

  const albums = await res.json();
  return (
    <div>
      <h1>Analytics</h1>
      {albums.map((album: Album) => {
        return (
          <div key={album.id}>
            <h1>Title: {album.title}</h1>
            <h1>User: {album.userid}</h1>
          </div>
        );
      })}
    </div>
  );
}
