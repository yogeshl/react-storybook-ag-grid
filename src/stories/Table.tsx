import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Table = (props:any) => {

	const [rowData] = useState([
		{ make: "Toyota", model: "Celica", price: 35000, type:"sedan" },
		{ make: "Nissan", model: "KDH", price: 32000, type:"van" },
		{ make: "KIA", model: "Sorento", price: 72000, type:"jeep" },
	]);

	const [columnDefs] = useState([
		{ field: "make" },
		{ field: "model" },
		{ field: "price" },
	]);

	return (
		<div className="ag-theme-alpine" style={{ height: 400, width: 850 }}>
			<AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
		</div>
	);
};

export default Table;