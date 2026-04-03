"use client";

export default function Error({ error, reset }: any) {
  console.error(error);
  return (
    <div>
      <p>Error occurred</p>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}