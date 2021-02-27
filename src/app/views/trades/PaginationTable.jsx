import React from "react";
import { Link } from 'react-router-dom'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination
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
  },
  {
    tname: "Luiz Antonio",
    sname: "Dex 10.0",
    exchange: "Bitmex",
    totalprofit: "-99",
    dayprofit: "+10",
    hourprofit: "-0.95",
    risklevel: "26",
    peformancefee: "50",
    totalusers: "redgraph",
    peformance: "20"
  },
  {
    tname: "Luiz Antonio",
    sname: "Dex 10.0",
    exchange: "Bitmex",
    totalprofit: "-99",
    dayprofit: "+10",
    hourprofit: "-0.95",
    risklevel: "26",
    peformancefee: "50",
    totalusers: "redgraph",
    peformance: "20"
  },
  {
    tname: "Luiz Antonio",
    sname: "Dex 10.0",
    exchange: "Bitmex",
    totalprofit: "-99",
    dayprofit: "+10",
    hourprofit: "-0.95",
    risklevel: "26",
    peformancefee: "50",
    totalusers: "redgraph",
    peformance: "20"
  },
  {
    tname: "Luiz Antonio",
    sname: "Dex 10.0",
    exchange: "Bitmex",
    totalprofit: "-99",
    dayprofit: "+10",
    hourprofit: "-0.95",
    risklevel: "26",
    peformancefee: "50",
    totalusers: "redgraph",
    peformance: "20"
  },
  {
    tname: "Luiz Antonio",
    sname: "Dex 10.0",
    exchange: "Bitmex",
    totalprofit: "-99",
    dayprofit: "+10",
    hourprofit: "-0.95",
    risklevel: "26",
    peformancefee: "50",
    totalusers: "redgraph",
    peformance: "20"
  },
  {
    tname: "Luiz Antonio",
    sname: "Dex 10.0",
    exchange: "Bitmex",
    totalprofit: "-99",
    dayprofit: "+10",
    hourprofit: "-0.95",
    risklevel: "26",
    peformancefee: "50",
    totalusers: "redgraph",
    peformance: "20"
  },
  {
    tname: "Luiz Antonio",
    sname: "Dex 10.0",
    exchange: "Bitmex",
    totalprofit: "-99",
    dayprofit: "+10",
    hourprofit: "-0.95",
    risklevel: "26",
    peformancefee: "50",
    totalusers: "redgraph",
    peformance: "20"
  },
  {
    tname: "Luiz Antonio",
    sname: "Dex 10.0",
    exchange: "Bitmex",
    totalprofit: "-99",
    dayprofit: "+10",
    hourprofit: "-0.95",
    risklevel: "26",
    peformancefee: "50",
    totalusers: "redgraph",
    peformance: "20"
  },
  {
    tname: "Luiz Antonio",
    sname: "Dex 10.0",
    exchange: "Bitmex",
    totalprofit: "-99",
    dayprofit: "+10",
    hourprofit: "-0.95",
    risklevel: "26",
    peformancefee: "50",
    totalusers: "redgraph",
    peformance: "20"
  },
  {
    tname: "Luiz Antonio",
    sname: "Dex 10.0",
    exchange: "Bitmex",
    totalprofit: "-99",
    dayprofit: "+10",
    hourprofit: "-0.95",
    risklevel: "26",
    peformancefee: "50",
    totalusers: "redgraph",
    peformance: "20"
  },
  {
    tname: "Luiz Antonio",
    sname: "Dex 10.0",
    exchange: "Bitmex",
    totalprofit: "-99",
    dayprofit: "+10",
    hourprofit: "-0.95",
    risklevel: "26",
    peformancefee: "50",
    totalusers: "redgraph",
    peformance: "20"
  }
];

function getText(value) {
  if (value <= 5) {
      return `Conservative`;
  }else if(value <= 10){
      return `Normal`;
  }else if(value <= 20){
      return `Slightly Aggressive`;
  }else if(value <= 30){
      return `Aggressive`;
  }else if(value <= 50){
      return `Very Aggressive`;
  }else{
      return `Super Aggressive`;
  }
}

function getColor(value) {
  if (value <= 0) {
      return `text-error`;
  }else{
      return `text-green`;
  }
}


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
      <Table style={{ whiteSpace: "pre" }}>
        <TableHead>
          <TableRow>
            <TableCell className="px-0">Trader Name</TableCell>
            <TableCell className="px-0">Strategy Name</TableCell>
            <TableCell className="px-0">Exchange</TableCell>
            <TableCell className="px-0">Total Profit</TableCell>
            <TableCell className="px-0">Last 7 Days Profit</TableCell>
            <TableCell className="px-0">Last 24 Hours Profit</TableCell>
            <TableCell className="px-0">Risk Level</TableCell>
            <TableCell className="px-0">Peformance Fee</TableCell>
            <TableCell className="px-0">Total Users Copying</TableCell>
            <TableCell className="px-0">Peformance</TableCell>
            <TableCell className="px-0">Detail View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell className="px-0 capitalize" align="left">
                  {subscriber.tname}
                </TableCell>
                <TableCell className="px-0 capitalize" align="left">
                  {subscriber.sname}
                </TableCell>
                <TableCell className="px-0 capitalize" align="left">
                  {subscriber.exchange}
                </TableCell>
                <TableCell className={"px-0 capitalize text-center py-24 w-100 " + getColor(subscriber.totalprofit)}>
                  {subscriber.totalprofit}%
                </TableCell>
                <TableCell className={"px-0 capitalize "+ getColor(subscriber.dayprofit)}>
                  {subscriber.dayprofit}%
                </TableCell>
                <TableCell className={"px-0 capitalize "+ getColor(subscriber.hourprofit)}>
                  {subscriber.hourprofit}%
                </TableCell>
                <TableCell className={"px-0 capitalize "+ getColor(subscriber.risklevel)}>
                  {getText(subscriber.risklevel)}
                </TableCell>
                <TableCell className="px-0 capitalize">
                  {subscriber.peformancefee}%
                </TableCell>
                <TableCell className="px-0 capitalize">
                  {subscriber.peformance}
                </TableCell>
                <TableCell className={"px-0 "+ getColor(subscriber.risklevel)}>
                  {subscriber.totalusers}
                </TableCell>
                <TableCell className={"px-0 " + getColor(subscriber.risklevel)}>
                <Link
                  to={{ pathname: '/trades/detailview', state: { 
                    tname         : subscriber.tname,
                    sname         : subscriber.sname,
                    exchange      : subscriber.exchange,
                    totalprofit   : subscriber.totalprofit,
                    dayprofit     : subscriber.dayprofit,
                    hourprofit    : subscriber.hourprofit,
                    risklevel     : subscriber.risklevel,
                    peformancefee : subscriber.peformancefee,
                    totalusers    : subscriber.totalusers,
                    peformance    : subscriber.peformance
                  } }}>
                  Detail View </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <TablePagination
        className="px-16"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={subscribarList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page"
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default PaginationTable;
