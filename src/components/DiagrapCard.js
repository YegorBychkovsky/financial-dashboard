"use client";
import Link from "next/link";

export default function DiagramCard({ label, value, id }) {
  const formattedValue = new Intl.NumberFormat("en-US").format(value);

  return (
    <Link href={`/indicator/${id}`} styles={{ zIndex: "10" }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          margin: "10px",
          textAlign: "center",
          background: "linear-gradient(135deg, #f0fdf4, #d1fae5)",
          cursor: "pointer",
        }}
      >
        <h3>{label}</h3>
        <p>(${formattedValue})</p>
      </div>
    </Link>
  );
}
