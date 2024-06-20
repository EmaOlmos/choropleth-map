import * as d3 from "d3";
import { useEffect } from "react";
import * as topo from "topojson";

// this might be usefull
// https://gist.github.com/almccon/410b4eb5cad61402c354afba67a878b8
// https://d3js.org/d3-geo

function App() {
  const map =
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";
  const data =
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";

  const svg = d3.select("svg");

  useEffect(() => {
    Promise.all([d3.json(map), d3.json(data)])
      .then((d) => main(d[0], d[1]))
      .catch((e) => console.log(e));

    const main = (map, d) => {
      // svg props and path setup

      const width = 800;
      const height = 300;
      const path = d3.geoPath();

      // svg setup

      svg
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "#000000");
    };
  }, []);

  return (
    <>
      <h1>ola</h1>
      <svg></svg>
    </>
  );
}

export default App;
