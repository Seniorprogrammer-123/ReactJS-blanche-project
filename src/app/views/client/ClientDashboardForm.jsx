import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
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
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const subscribarList = [
    {
        time: "Feb 19, 2021",
        amount: "+0.01",
        peformance: "-0.005",
        credit: "-0.020",
        wallet: "0.06"
    },
    {
        time: "Feb 10, 2021",
        amount: "+0.01",
        peformance: "-0.01",
        credit: "-0.022",
        wallet: "0.05"
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
  
  function detailView(value) {
    if (value <= 0) {
        return `text-error`;
    }else{
        return `text-green`;
    }
  }


export default function ClientDashboardForm() {

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
                <h5>You Are Copying</h5>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-native-required">Strategy Type</InputLabel>
                            <Select
                                native
                                value={state.age}
                                onChange={handleChange}
                                name="age"
                                inputProps={{
                                    id: 'age-native-required',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>SuperBot</option>
                                <option value={20}>Credit</option>
                                <option value={30}>Strategy</option>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
              </SimpleCard>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
              <SimpleCard>
                <p className="text-center">Last 24 hours Profit</p>
                <div className="text-center text-green thumbnail">0.55%</div>
              </SimpleCard>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
              <SimpleCard>
                <p className="text-center">Last 7 Days</p>
                <div className="text-center text-green thumbnail">5.88%</div>
              </SimpleCard>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
              <SimpleCard>
                <p className="text-center">Last Month</p>
                <div className="text-center text-green thumbnail">22.85%</div>
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
                <span>Order History</span><div className="py-12" />
                <Table style={{ whiteSpace: "pre" }}>
                    <TableHead>
                    <TableRow>
                        <TableCell className="px-0 text-center" align="center">Time</TableCell>
                        <TableCell className="px-0 text-center" align="center">Amount</TableCell>
                        <TableCell className="px-0 text-center" align="center">Peformanc Fee</TableCell>
                        <TableCell className="px-0 text-center" align="center">Credit Balance</TableCell>
                        <TableCell className="px-0 text-center" align="center">Wallet Balance</TableCell>
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
                            {subscriber.peformance}
                            </TableCell>
                            <TableCell className="px-0 capitalize text-center py-24 w-100" align="center" className={getColor(subscriber.credit)}>
                            {subscriber.credit}
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