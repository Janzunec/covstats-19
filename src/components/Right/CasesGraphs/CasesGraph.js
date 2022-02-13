import React from "react";
import "./CasesGraph.css";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  DoughnutController,
  LinearScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
  registerables,
} from "chart.js";
import { width } from "@mui/system";

export default function CasesGraph(props) {
  ChartJS.register(
    DoughnutController,
    LinearScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle,
    ...registerables
  );

  const labels = [];
  const colors = [];

  if (props.casesType === "active") {
    labels.push("Mild condition", "Critical condition");
    colors.push("#14a098", "#0f292f");
  } else {
    labels.push("Recovered", "Deaths");
    colors.push("#cb2d6f", "#501f3a");
  }

  const state = {
    labels: [...labels],
    datasets: [
      {
        label: "130,000",
        data: [290, 80],
        backgroundColor: [...colors],
        borderWidth: 0,
        width: "10px",
      },
    ],
  };

  return (
    <div className={`cases-graph`}>
      <Doughnut
        data={state}
        options={{
          cutout: "80%",
          maintainAspectRatio: false,
          responsive: true,
          animations: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                boxWidth: 15,
                font: { size: "16px", weight: 500 },
                padding: 20,
                color: "#555",
                textAlign: "center",
              },
            },
          },
        }}
      />
    </div>
  );
}
