import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Medicaid",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 400, 350, 200, 100],
    },
    {
      name: "Medicare",
      data: [40, 50, 200, 400, 200, 100, 30, 40, 150, 100, 200, 240],
    },
    {
      name: "Commercial",
      data: [100, 30, 10, 100, 300, 100, 5, 60, 350, 100, 400, 350],
    },
  ],

  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#E53E3E", "#3182CE", "#f6c85e"], // light red, light blue, light reddish-orange
    stroke: {
      curve: "straight",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function LineGraphTailwind() {
  return (
    <div className="flex-grow bg-white rounded-lg shadow-xl items-center pl-10 py-5">
      <div>
        <div className="text-4xl text-blue-900 font-bold">
          Member Data
          <Typography variant="h7" color="gray">
            Click on a category label to remove from display
          </Typography>
        </div>
      </div>
      <Chart {...chartConfig} />
    </div>
  );
}
