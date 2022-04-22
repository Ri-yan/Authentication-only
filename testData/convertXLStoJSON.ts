import { writeFileSync } from "fs";
var XLSX = require("xlsx");
try {
  const workBook = XLSX.readFile("./UserData.xls");
  const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets.testData);
  writeFileSync(
    "./cypress/fixtures/testData.json",
    JSON.stringify(jsonData, null, 4),
    "utf-8"
  );
  console.log(jsonData)
} catch (e) {
  throw Error(e);
}