"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useRouter } from "next/navigation";
import Button from "@/UI/Button/Button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ label, data, color, back = true }) {
  const router = useRouter();

  const handleBack = () => {
    
    router.back();
  };

  return (
    <div style={{ width: "600px", margin: "20px auto" }}>
      {back && <Button text={"← Back"} onClick={handleBack} />}
      <h3>{label}</h3>
      <Line
        data={{
          labels: ["Q1", "Q2", "Q3", "Q4"],
          datasets: [
            {
              label,
              data,
              borderColor: color || "blue",
              fill: false,
              pointBackgroundColor: color || "blue",
            },
          ],
        }}
      />
    </div>
  );
}
