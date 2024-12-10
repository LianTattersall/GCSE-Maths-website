import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { MathJax } from "better-react-mathjax";

export default function QuadraticGraph1() {
  const xs = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  return (
    <LineChart
      xAxis={[
        {
          data: xs,
        },
      ]}
      series={[
        {
          data: xs.map((num) => num ** 2 - 9),
          label: "y = x² - 9",
        },
        { data: xs.map((num) => 0), label: "y = 0" },
      ]}
      width={500}
      height={300}
    />
  );
}
