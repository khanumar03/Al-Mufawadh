import fs from "fs";
import path from "path";

import { getMapJSON } from "dotted-map";

const mapJson = getMapJSON({
  height: 90,
  grid: "diagonal",
  region: {
    lat: { min: 8, max: 42 },
    lng: { min: 25, max: 62 },
  },
});

const outputPath = path.join(process.cwd(), "src", "lib", "middleEastMap.json");

fs.writeFileSync(outputPath, JSON.stringify(mapJson));

console.log("Middle East map generated!");
