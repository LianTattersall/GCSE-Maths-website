import { LineChart } from "@mui/x-charts";

export default function QuadraticGraph2() {
  const xs = [-3, -2, -1, 0, 1, 2, 3];
  return (
    <LineChart
      xAxis={[
        {
          data: xs,
        },
      ]}
      series={[
        {
          data: xs.map((num) => num ** 2),
          label: "y = x²",
        },
        { data: xs.map((num) => 2 - num), label: "y = 2 - x" },
      ]}
      width={500}
      height={300}
    />
  );
}
