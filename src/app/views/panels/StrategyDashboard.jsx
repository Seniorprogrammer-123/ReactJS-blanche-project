import React from "react";
import Button from "@material-ui/core/Button";
import { SimpleCard } from "matx";
import { Grid } from "@material-ui/core";
import ModifiedAreaChart from "./shared/ModifiedAreaChart";
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
        userwhocopies: "Bhewson",
        deposityourwallet: "Complete"
    },
    {
        time: "Feb 19, 2021",
        amount: "+0.0852",
        userwhocopies: "Mari952",
        deposityourwallet: "Complete"
    }
  ];
  
  function getColor(value) {
    if (value <= 0) {
        return `text-error`;
    }else{
        return `text-green`;
    }
  }
  

export default function StrategyDashboard() {

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    };

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

  
  return (
    <div>
      <div className="m-sm-30">
        {/* {window.location.pathname} */}
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
              <SimpleCard>
                <h5>Select Your Strategy</h5>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Autocomplete
                      id="free-solo-demo"
                      options={top100Films.map((option) => option.title)}
                      renderInput={(params) => (
                        <TextField {...params} label="Account Type" margin="normal" variant="outlined" />
                      )}
                    />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <h3>Total User Copying 500</h3>
                    </Grid>
                </Grid>
                <div className="py-12" />
                <Button className="btn btn-danger text-white bg-error">Stop Providing The Strategy</Button>
              </SimpleCard>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
              <SimpleCard>
                <h5 className="text-center">Last 24 hours Profit</h5><br />
                <div className="text-center text-green thumbnail">0.55%</div>
              </SimpleCard>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
              <SimpleCard>
                <h5 className="text-center">Last 7 Days</h5><br />
                <div className="text-center text-green thumbnail">4.53%</div>
              </SimpleCard>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
              <SimpleCard>
                <h5 className="text-center">Last Month</h5><br />
                <div className="text-center text-green thumbnail">24.53%</div>
              </SimpleCard>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
              <SimpleCard>
                <h2>Total Profit: 0.085 BTC</h2>
                <div className="pb-86 pt-30 px-30 bg-primary">
                  <ModifiedAreaChart
                    height="280px"
                    option={{
                      series: [
                        {
                          data: [34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33, 40],
                          type: "line"
                        }
                      ],
                      xAxis: {
                        data: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec"
                        ]
                      }
                    }}
                  ></ModifiedAreaChart>
                </div>
              </SimpleCard>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
              <SimpleCard>
                <div className="mark"><span>Order History</span>&nbsp;<span>: Total Earning 24 hours</span>&nbsp;<span className={getColor(0.0055)}>0.0055,</span>&nbsp;<span>Total Earning 7 Days</span>&nbsp;<span className={getColor(0.0155)}>0.0155,</span>&nbsp;<span>Total Earning</span>&nbsp;<span className={getColor(0.155)}>0.155</span>&nbsp;<div className="py-12" /></div>
                <Table style={{ whiteSpace: "pre" }}>
                    <TableHead>
                    <TableRow>
                        <TableCell className="px-0 text-center" align="center">Time</TableCell>
                        <TableCell className="px-0 text-center" align="center">Amount</TableCell>
                        <TableCell className="px-0 text-center" align="center">User who copies</TableCell>
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
                            <TableCell className="px-0 capitalize" align="center" className={getColor(subscriber.amount)}>
                            {subscriber.amount}
                            </TableCell>
                            <TableCell className="px-0 capitalize" align="center">
                            {subscriber.userwhocopies}
                            </TableCell>
                            <TableCell className="px-0 capitalize text-center py-24 w-100" align="center">
                            {subscriber.deposityourwallet}
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