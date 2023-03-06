import React from "react";
import Logo from "./assets/images/logo.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import data from "../data.json";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const App = () => {
  const state = {
    labels: data.map((item) => item.day),
    datasets: [
      {
        label: "",
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 8,
        data: data.map((item) => item.amount),
      },
    ],
  };
  return (
    <div className="h-screen font-sans bg-neutral-cream flex flex-col gap-y-4 items-center justify-center">
      <div className="bg-primary-softRed w-96 rounded-xl text-neutral-veryPaleOrange p-4 flex justify-between">
        <div>
          <p className="text-sm opacity-90 pb-2">My balance</p>
          <p className="font-bold text-2xl">$921.48</p>
        </div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="bg-neutral-veryPaleOrange text-neutral-darkBrown w-96 rounded-xl p-4">
        <p className="text-2xl font-bold pb-4">Spending - Last 7 days</p>
        <div className="pb-4">
          <Bar data={state} />
        </div>
        <hr />
        <div className="flex justify-between pt-4">
          <div className="text-left">
            <p className="text-sm opacity-70">Total this month</p>
            <p className="font-bold text-4xl text-neutral-darkBrown">$478.33</p>
          </div>
          <div className="text-right">
            <p className=" text-sm">+24%</p>
            <p className="text-sm opacity-70">From last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
