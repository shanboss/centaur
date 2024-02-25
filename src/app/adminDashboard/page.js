"use client";
import Layout from "@/components/Layout";
import React from "react";
import { Select, Option, ListItem, List } from "@material-tailwind/react";
import SearchBar from "@/components/SearchBar";
import LineGraphTailwind from "@/components/LineGraph";
import { SidebarWithLogo } from "@/components/SideBar";
import { FaChartLine } from "react-icons/fa6";


export default function dashboard() {
  const [filterValue, setFilterValue] = React.useState("Line of Business");

  return (
    <Layout>
      <div className="flex flex-col w-full">
        <div className="flex flex-row my-8 gap-x-4">
          <SidebarWithLogo />
          <div className="text-black font-semibold">
            You are currently in the Administrative Module.
          </div>
        </div>

        <div className="flex flex-row gap-x-4">
          <div>
            <Select
              label="Filter"
              value={filterValue}
              onChange={(val) => setFilterValue(val)}
              variant="outlined"
            >
              <Option value="Total Population">Total Population</Option>
              <Option value="Line of Business">Line Of Business</Option>
              <Option value="Employer Groups">Employer Groups</Option>
            </Select>
          </div>
          <div>
            <SearchBar label={"Search Views"} />
          </div>
        </div>
        {/* This is the Main Content container */}
        <div className="flex flex-col space-y-2 ">
          <div className="flex flex-row my-4 gap-x-8">
            {/* This is the graph container */}
            <LineGraphTailwind />
            <div className="bg-white flex-grow rounded-lg shadow-xl p-4 flex flex-col gap-y-4">
              <div className="flex-grow">
                <div className="text-blue-900 text-3xl font-semibold px-4 py-4">
                  Current STAR Rating
                </div>
                <div className="text-orange-700 text-6xl font-semibold px-4 mb-2">
                  4.5
                </div>
                <div className="text-green-600 px-4 flex flex-row items-center">
                  <span className="mr-1">
                    <FaChartLine />
                  </span>
                  Up 5% from last year
                </div>
              </div>
              <div className="underline text-blue-800 hover:cursor-pointer px-4">
                Comparative Analysis
              </div>
              <div className="underline text-blue-800 hover:cursor-pointer px-4">
                View Full Report
              </div>
            </div>
          </div>
          {/*These are the buttons for Medicare Medicaid and Commercial */}
          <div className="flex-row">
            <div className="bg-white p-4 rounded-lg shadow-lg space-y-2 py-8 mb-8">
              <div className="text-blue-900 text-2xl font-semibold mb-12">
                Line of Business Snapshot
              </div>
              <div className="flex">
                <div className="flex-grow space-y-2">
                  <List>
                    <ListItem className="bg-blue-900 py-4 hover:bg-blue-500 duration-200 text-center px-4 text-white w-1/2 rounded-lg shadow-lg hover:cursor-pointer ">
                      Medicare{" "}
                    </ListItem>
                    <ListItem className="bg-blue-900 hover:bg-blue-500 duration-200 text-center px-4 py-4 text-white w-1/2 rounded-lg shadow-lg hover:cursor-pointer ">
                      Medicaid{" "}
                    </ListItem>
                    <ListItem className="bg-blue-900 hover:bg-blue-500 duration-200 text-center px-4 py-4 text-white w-1/2 rounded-lg shadow-lg hover:cursor-pointer ">
                      Commercial{" "}
                    </ListItem>
                  </List>
                </div>

                <div className="gap-4 bg-gray-100 p-4 rounded-lg shadow-lg flex flex-row justify-between items-center">
                  <div className="text-blue-800 border-r border-gray-800 p-4 font-semibold flex flex-col justify-center items-center">
                    Total Member Population
                    <div className="text-6xl text-orange-800 py-4">1.7k</div>
                    <div className="text-blue-800 py-4 font-bold hover:underline cursor-pointer">
                      View All Members
                    </div>
                  </div>
                  <div className="text-blue-800 border-r border-gray-800 p-4 font-semibold flex flex-col justify-center items-center">
                    Total High Risk Member Population
                    <div className="text-6xl text-orange-800 py-4">2.3k</div>
                    <div className="text-blue-800 py-4 font-bold hover:underline cursor-pointer">
                      View High Risk Members
                    </div>
                  </div>
                  <div className="text-blue-800 p-4 font-semibold flex flex-col justify-center items-center ">
                    Member Satisfaction Score
                    <div className="text-6xl text-orange-800 py-4">
                      70<span className="text-3xl text-orange-800">/100</span>
                    </div>
                    <div className="text-blue-800 py-4 font-bold hover:underline cursor-pointer">
                      View Member Satisfaction Report
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
