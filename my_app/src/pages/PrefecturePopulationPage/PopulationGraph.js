import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./CheckBox.css";

export default function PopulationGraph({ checkedPrefs, populations }) {
  const [startYear, setStartYear] = useState(1960);
  const [endYear, setEndYear] = useState(2045);

  const categories = createCategories(startYear, endYear);
  const series = createSeries(categories, checkedPrefs, populations);
  const options = createOptions(categories, series);

  function handleReset() {
    setStartYear(1960);
    setEndYear(2045);
  }

  return (
    <>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <br></br>
        <div className="hc_setting">
          <div className="yearRange">
            年代を指定：
            <select
              id="startYear"
              name="startYear"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
            >
              <option value="1960">1960</option>
              <option value="1965">1965</option>
              <option value="1970">1970</option>
              <option value="1975">1975</option>
              <option value="1980">1980</option>
              <option value="1985">1985</option>
              <option value="1990">1990</option>
              <option value="1995">1995</option>
              <option value="2000">2000</option>
              <option value="2005">2005</option>
              <option value="2010">2010</option>
              <option value="2015">2015</option>
              <option value="2020">2020</option>
              <option value="2025">2025</option>
              <option value="2030">2030</option>
              <option value="2035">2035</option>
              <option value="2040">2040</option>
              <option value="2045">2045</option>
            </select>
            〜
            <select
              id="endYear"
              name="endYear"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
            >
              <option value="2045">2045</option>
              <option value="2040">2040</option>
              <option value="2035">2035</option>
              <option value="2030">2030</option>
              <option value="2025">2025</option>
              <option value="2020">2020</option>
              <option value="2015">2015</option>
              <option value="2010">2010</option>
              <option value="2005">2005</option>
              <option value="2000">2000</option>
              <option value="1995">1995</option>
              <option value="1990">1990</option>
              <option value="1985">1985</option>
              <option value="1980">1980</option>
              <option value="1975">1975</option>
              <option value="1970">1970</option>
              <option value="1965">1965</option>
              <option value="1960">1960</option>
            </select>
            年{" "}
          </div>
          <button className="resetYear" onClick={handleReset}>
            リセット
          </button>
        </div>
        <br></br>
      </div>
    </>
  );
}

function createOptions(categories, series) {
  return {
    title: {
      text: "人口推移（都道府県別）",
    },
    subtitle: {
      text: "1965-2045年 (5年毎)",
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories: categories,
      gridLineWidth: 1,
      tickInterval: 3,
      crosshair: true,
    },
    yAxis: {
      title: {
        text: "人口数（万人）",
      },
      labels: {
        formatter() {
          return `${this.value / 10000}`;
        },
      },
    },
    legend: {
      layout: "proximate",
      align: "right",
      verticalAlign: "middle",
      itemStyle: {
        cursor: "default",
        fontWeight: "normal",
      },
      itemHoverStyle: {
        fontWeight: "bold",
      },
      itemMarginBottom: 4,
    },
    series: series,
  };
}

function createSeries(categories, checkedPrefs, populations) {
  let series = [];

  if (checkedPrefs.length === 0) {
    return series;
  }
  checkedPrefs.forEach((pref) => {
    let popu_data = [];
    const cur_pref = populations[pref.prefCode];
    if (cur_pref) {
      categories.forEach((year) => {
        let idx = (year - 1960) / 5;
        popu_data.push(cur_pref.popuData[idx].value);
      });
      series.push({ name: pref.prefName, data: popu_data });
    }
  });

  return series;
}

function createCategories(startYear, endYear) {
  let categories = [];
  let year = parseInt(startYear);
  for (year; year <= endYear; year += 5) {
    categories.push(year);
  }
  return categories;
}

// [
//   1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015,
//   2020, 2025, 2030, 2035, 2040, 2045,
// ];
