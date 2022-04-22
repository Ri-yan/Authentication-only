// import { useEffect, useState } from 'react';
import './Userdata.xls'
// var XLSX = require("xlsx");
const EXTENSIONS = ['xlsx', 'xls', 'csv']

const XLSX = require('xlsx');

// read file
let workbook = XLSX.readFile(UserData.xls);

// read first sheet (identified by first of SheetNames)
let sheet = workbook.Sheets[workbook.SheetNames[0]];

// convert to JSON
let json = XLSX.utils.sheet_to_json(sheet);



export default json;



// function Step4() {
//   const [colDefs, setColDefs] = useState()
//   const [data, setData] = useState()

//   const getExention = (file) => {
//     const parts = file.name.split('.')
//     const extension = parts[parts.length - 1]
//     return EXTENSIONS.includes(extension) // return boolean
//   }

//   const convertToJson = (headers, data) => {
//     const rows = []
//     data.forEach(row => {
//       let rowData = {}
//       row.forEach((element, index) => {
//         rowData[headers[index]] = element
//       })
//       rows.push(rowData)

//     });
//     return rows
//   }

//   const importExcel = (e) => {
//     const file = XLSX.readFile("./UserData.xls");

//     const reader = new FileReader()
//     reader.onload = (event) => {
//       //parse data

//       const bstr = event.target.result
//       const workBook = XLSX.read(bstr, { type: "binary" })

//       //get first sheet
//       const workSheetName = workBook.SheetNames[0]
//       const workSheet = workBook.Sheets[workSheetName]
//       //convert to array
//       const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 })
//       // console.log(fileData)
//       const headers = fileData[0]
//       const heads = headers.map(head => ({ title: head, field: head }))
//       setColDefs(heads)

//       //removing header
//       fileData.splice(0, 1)


//       setData(convertToJson(headers, fileData))
//     }

//     if (file) {
//       if (getExention(file)) {
//         reader.readAsBinaryString(file)
//       }
//       else {
//         alert("Invalid file input, Select Excel, CSV file")
//       }
//     } else {
//       setData([])
//       setColDefs([])
//     }
//   }

//   console.log('data',data)
//   console.log('columns',colDefs)
//   useEffect(()=>{
//     importExcel()
//   },[])

// }

// export default Step4