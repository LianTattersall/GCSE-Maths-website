import * as React from "react";
import { LineChart, LinePlot } from "@mui/x-charts/LineChart";

import { MathJax } from "better-react-mathjax";

export default function QuadraticGraph3() {
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
          data: xs.map((num) => num ** 2 - 2),
          label: "y = x² - 2",
          color: "red",
          showMark: false,
        },
        {
          data: xs.map((num) => 0),
          label: "y = 0",
          color: "black",
          showMark: false,
        },
      ]}
      width={500}
      height={300}
    />
  );
}
