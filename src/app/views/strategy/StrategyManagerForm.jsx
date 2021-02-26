import React, { Component } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import {
  Button
} from "@material-ui/core";
import { SimpleCard } from "matx";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow
} from "@material-ui/core";
import "date-fns";
const subscribarPedding = [
  {
    name: "John",
    email: "john@www.com",
    balance: "0.05",
    sevenprofit: "0.05",
    drawndown: "20",
    thrityprofit: "0.008"
  },
  {
    name: "Mario",
    email: "mario@www.com",
    balance: "0.05",
    sevenprofit: "0.05",
    drawndown: "20",
    thrityprofit: "0.008"
  }
];

const subscribarApproved = [
  {
    name: "Anna",
    email: "anna@www.com",
    balance: "0.05",
    sevenprofit: "0.05",
    drawndown: "20",
    thrityprofit: "0.008",
    profitgenerate: "0.05",
    copying: "500"
  },
  {
    name: "Misha",
    email: "misha@www.com",
    balance: "0.05",
    sevenprofit: "0.05",
    drawndown: "20",
    thrityprofit: "0.008",
    profitgenerate: "0.05",
    copying: "500"
  }
];



class StrategyManagerForm extends Component {
  state = {
    username: "",
    firstName: "",
    email: "",
    date: new Date(),
    creditCard: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    gender: "",
    agreement: ""
  };

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }

  handleSubmit = event => {
    console.log("submitted");
    console.log(event);
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = date => {
    console.log(date);

    this.setState({ date });
  };

  render() {
    return (
      <div>
        <SimpleCard title="Pedding Strategys">
          <Table style={{ whiteSpace: "pre" }}>
            <TableHead>
              <TableRow>
                <TableCell className="px-0" align="center">User Name</TableCell>
                <TableCell className="px-0" align="center">Email</TableCell>
                <TableCell className="px-0" align="center">Total Balance Account</TableCell>
                <TableCell className="px-0" align="center">Total Profit Last 7 Days</TableCell>
                <TableCell className="px-0" align="center">Total Profit Last 30 Days</TableCell>
                <TableCell className="px-0" align="center">Total Drawndown</TableCell>
                <TableCell className="px-0" align="center">Approve?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subscribarPedding.map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.name}
                  </TableCell>
                  <TableCell className="px-0" align="center">
                    {subscriber.email}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.balance}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.sevenprofit}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.thrityprofit}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.drawndown}%
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    <Button variant="outlined" color="primary">Yes</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </SimpleCard>
        <div className="py-12" />
        <SimpleCard title="Approved Trades">
          <Table style={{ whiteSpace: "pre" }}>
            <TableHead>
              <TableRow>
                <TableCell className="px-0" align="center">User Name</TableCell>
                <TableCell className="px-0" align="center">Email</TableCell>
                <TableCell className="px-0" align="center">Total Balance Account</TableCell>
                <TableCell className="px-0" align="center">Total Profit Last 7 Days</TableCell>
                <TableCell className="px-0" align="center">Total Profit Last 30 Days</TableCell>
                <TableCell className="px-0" align="center">Total Drawndown</TableCell>
                <TableCell className="px-0" align="center">Profit Generated</TableCell>
                <TableCell className="px-0" align="center">Copying</TableCell>
                <TableCell className="px-0" align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subscribarApproved.map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell className="px-0 capitalize text-center" align="center">
                    {subscriber.name}
                  </TableCell>
                  <TableCell className="px-0" align="center">
                    {subscriber.email}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.balance}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.sevenprofit}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.thrityprofit}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.drawndown}%
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.profitgenerate}
                  </TableCell>
                  <TableCell className="px-0 capitalize">
                    {subscriber.copying}
                  </TableCell>
                  <TableCell className="px-0" align="center">
                    <Button variant="outlined" color="primary">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </SimpleCard>
      </div>
    );
  }
}

export default StrategyManagerForm;
