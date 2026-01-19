const fs = require("fs");
const path = require("path");
const { getMapJSON } = require("dotted-map");

const mapJson = getMapJSON({
  height: 90,
  grid: "diagonal",
  region: {
    lat: { min: 8, max: 42 },
    lng: { min: 25, max: 62 },
  },
  avoidOuterPins: true,
});

const outputPath = path.join(
  process.cwd(),
  "src",
  "lib",
  "middleEastMap.json"
);

fs.writeFileSync(outputPath, JSON.stringify(mapJson));

console.log("Middle East map generated!");
