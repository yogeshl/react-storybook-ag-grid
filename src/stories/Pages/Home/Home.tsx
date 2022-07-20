import React from "react";
import { row } from "../../Table.types";
import Table from "../../Table";

const Home = (
    { rowData, title, columnDefs}: { rowData: Array<row>; title: string; footer: string; columnDefs: any }) => {
        return (
            <div>
                <h1>{title}</h1>
                <Table rowData={rowData} columnDefs={columnDefs} />
            </div>
        )
    };

export default Home;