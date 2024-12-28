export const indicators = [
  { id: "revenue", name: "Revenue", value: 5_000_000 },
  { id: "expenses", name: "Expenses", value: 3_000_000 },
  { id: "ebitdar", name: "EBITDAR", value: 2_000_000 },
];

export const indicatorDetails = (() => {
  const revenue = [400_000, 800_000, 2_300_000, 1_500_000];
  const expenses = [750_000, 770_000, 850_000, 630_000];

  const ebitdar = {
    data: revenue.map((rev, i) => rev - expenses[i]),
    children: {
      revenue,
      expenses,
    },
  };

  return {
    revenue,
    expenses,
    ebitdar,
  };
})();
