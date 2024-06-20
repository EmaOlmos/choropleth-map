import * as d3 from "d3";
import * as topo from "topojson";

function App() {
  const map =
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";
  const data =
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";

  const svg = d3.select("svg");

  Promise.all([d3.json(map), d3.json(data)])
    .then((d) => main(d[0], d[1]))
    .catch((e) => console.log(e));

  const main = (map, d) => {
    console.log(d);
  };

  return (
    <>
      <h1>ola</h1>
      <svg></svg>
    </>
  );
}

export default App;
