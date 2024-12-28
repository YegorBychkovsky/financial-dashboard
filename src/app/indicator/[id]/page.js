import { indicatorDetails } from "@/data/data";
import LineChart from "@/components/LineChart";
import EbitdarChart from "@/components/EbitdarChart";

export default function IndicatorPage({ params }) {
  const { id } = params;

  if (!id || !indicatorDetails[id]) return <p>🔄 Загрузка...</p>;

  const data = indicatorDetails[id];

  return (
    <div>
      <h1>📈 {id.toUpperCase()}</h1>
      {id === "ebitdar" ? (
        <EbitdarChart data={data} />
      ) : (
        <LineChart label={id} data={data} color="green" />
      )}
    </div>
  );
}
