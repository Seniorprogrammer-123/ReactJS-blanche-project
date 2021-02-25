import React from "react";
import { SimpleCard } from "matx";
import {
    Button,
    Grid
} from "@material-ui/core";

const subscribarList = [
  {
    tname: "Bono Costa",
    sname: "SuperBot 2.0",
    exchange: "Bitmex",
    totalprofit: "+688",
    dayprofit: "+10",
    hourprofit: "-0.55",
    risklevel: "10",
    peformancefee: "50",
    totalusers: "bluegraph",
    peformance: "500"
  }
];


const PaginationTable = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
  };

  return (
    <div className="w-100 overflow-auto">
      <Grid container spacing={6}>
        <Grid item lg={9} md={8} sm={12} xs={12}>
            <SimpleCard>

            </SimpleCard>
        </Grid>
        <Grid item lg={3} md={4} sm={12} xs={12}>
            <SimpleCard>

            </SimpleCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default PaginationTable;
