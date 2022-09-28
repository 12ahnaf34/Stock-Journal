import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

function SampleTradeList(props) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const profits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const data = {
    labels: monthNames,
    datasets: [
      {
        label: "Profits",
        data: profits,
        borderColor: "rgb(58, 180, 242)",
        backgroundColor: "rgb(58, 180, 242)",
      },
    ],
  };

  return (
    <div>
      <div className="sample-chart">
        <Line data={data} />
      </div>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Stock</td>
            <td>Method</td>
            <td>Quantity</td>
            <td>P/L</td>
            <td className="td-blank"></td>
          </tr>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td className="td-blank"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SampleTradeList;
