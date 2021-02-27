import React from "react";
import Button from "@material-ui/core/Button";
import { SimpleCard } from "matx";
import { Grid } from "@material-ui/core";
import LineGraph from '../charts/echarts/LineGraph';

import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination
} from "@material-ui/core";

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 }
];

const subscribarList = [
    {
        time: "Feb 19, 2021",
        amount: "+0.01",
        user: "Bhewson",
        wallet: "Complete"
    },
    {
      time: "Feb 19, 2021",
      amount: "+0.852",
      user: "Mari952",
      wallet: "Complete"
    }
  ];
  
  
  function getColor(value) {
    if (value <= 0) {
        return `text-error`;
    }else{
        return `text-green`;
    }
  }

  var graphHeight = {
    height: 200
  };

  let linkbtnstyle = {
    margin: 24,
    lineHeight: '43.625px',
    marginTop: '16px',
    width: '200px'
  }
  

export default function AffiliateDashboardForm() {

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    };

  
  return (
    <div>
      <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
          <Autocomplete
            id="free-solo-demo"
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} label="Site Link Address" margin="normal" variant="outlined" />
            )}
          />
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Button variant="outlined" color="primary" style = {linkbtnstyle}>Copy Your Link</Button>
          </Grid>
      </Grid>
      <div className="m-sm-30">
        {/* {window.location.pathname} */}
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
              <SimpleCard>
                <h3>Your Network:</h3>
                <div className="text-green thumbnail">Total User: 500</div>
              </SimpleCard>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
              <SimpleCard>
                <p className="text-center">Last 24 hours Profit</p>
                <div className="text-center text-green thumbnail">0.008</div>
              </SimpleCard>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
              <SimpleCard>
                <p className="text-center">Last 7 Days</p>
                <div className="text-center text-green thumbnail">0.5863</div>
              </SimpleCard>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
              <SimpleCard>
                <p className="text-center">Last Month</p>
                <div className="text-center text-green thumbnail">0.3858</div>
              </SimpleCard>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
              <SimpleCard style={graphHeight}>
                <h2>Total Profit: 0.085 BTC</h2><br />
                <LineGraph
                  data={[23, 26, 38, 37, 40, 57, 34, 47, 89, 58, 68, 79, 70, 99]}
                  labels={['2021-02-11', '2021-02-12', '2021-02-13', '2021-02-14', '2021-02-15', '2021-02-16', '2021-02-17', '2021-02-18', '2021-02-19', '2021-02-20', '2021-02-21', '2021-02-22', '2021-02-23', '2021-02-24']}
                />
              </SimpleCard>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
              <SimpleCard>
                <h4>Order History</h4>
                <br />
                <span>Toal Earning 24 Hours : </span><span className={getColor(0.0055)}>0.0055</span>,&nbsp;
                <span>Toal Earning 7 Days : </span><span className={getColor(0.0155)}>0.0155</span>,&nbsp;
                <span>Toal Earning : </span><span className={getColor(0.155)}>0.155</span>
                <div className="py-12" />
                <Table style={{ whiteSpace: "pre" }}>
                    <TableHead>
                    <TableRow>
                        <TableCell className="px-0 text-center" align="center">Time</TableCell>
                        <TableCell className="px-0 text-center" align="center">Amount</TableCell>
                        <TableCell className="px-0 text-center" align="center">User</TableCell>
                        <TableCell className="px-0 text-center" align="center">Deposit to your wallet</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {subscribarList
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((subscriber, index) => (
                        <TableRow key={index}>
                            <TableCell className="px-0 capitalize" align="center">
                            {subscriber.time}
                            </TableCell>
                            <TableCell align="center" className={"px-0 capitalize " + getColor(subscriber.amount)}>
                            {subscriber.amount}
                            </TableCell>
                            <TableCell className="px-0 capitalize" align="center">
                            {subscriber.user}
                            </TableCell>
                            <TableCell className="px-0 capitalize text-center py-24 w-100" align="center">
                            {subscriber.wallet}
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
              </SimpleCard>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}