"use client";
import LineChart from "./LineChart";
import { useRouter } from "next/navigation";
import Button from "@/UI/Button/Button";

export default function EbitdarChart({ data }) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <Button text={"← Back"} onClick={handleBack} />
      <h2>📊 EBITDAR Breakdown</h2>
      <LineChart
        back={false}
        label="Revenue"
        data={data.children.revenue}
        color="green"
      />
      <LineChart
        back={false}
        label="Expenses"
        data={data.children.expenses}
        color="red"
      />
    </div>
  );
}
