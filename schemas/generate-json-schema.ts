import { writeFileSync } from "node:fs";
import * as z from "zod";
import { MapStructure, Level } from "../src/lib/schemas.ts"; // adjust name/path

const level_schema = z.toJSONSchema(Level, { target: "draft-7" });
writeFileSync("level_schema.json", JSON.stringify(level_schema, null, 2));
console.log("Wrote level_schema.json");

const map_schema = z.toJSONSchema(MapStructure, { target: "draft-7" })
writeFileSync("map_schema.json", JSON.stringify(map_schema, null, 2));
console.log("Wrote map_schema.json");
