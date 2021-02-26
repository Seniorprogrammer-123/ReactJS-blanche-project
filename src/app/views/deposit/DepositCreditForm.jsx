import React, { Component } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
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
    amount: "0.05",
    cdate: "2021-02-23",
    status: "Confirmed"
  },
  {
    amount: "0.06",
    cdate: "2021-02-24",
    status: "Confirmed"
  }
];


class DepositCreditForm extends Component {
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
        <SimpleCard title="Deposit Credit To Your Account">
          <Table style={{ whiteSpace: "pre" }}>
            <TableHead>
              <TableRow>
                <TableCell className="px-0" align="center">Amount</TableCell>
                <TableCell className="px-0" align="center">Date</TableCell>
                <TableCell className="px-0" align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subscribarPedding.map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.amount}
                  </TableCell>
                  <TableCell className="px-0" align="center">
                    {subscriber.cdate}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </SimpleCard>
        <div className="py-12" />
      </div>
    );
  }
}

export default DepositCreditForm;
