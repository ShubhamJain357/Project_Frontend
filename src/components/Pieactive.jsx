import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 10, label: "air_conditioner" },
  { id: 1, value: 15, label: "car_horn" },
  { id: 2, value: 20, label: "children_playing" },
  { id: 3, value: 30, label: "dog_bark" }
];

export function Pieactive() {
  return (
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
      />
  );
}
