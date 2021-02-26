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
    profit: "0.05",
    network: "500"
  },
  {
    name: "Mario",
    email: "mario@www.com",
    profit: "0.05",
    network: "500"
  }
];


class AffiliateManagerForm extends Component {
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
        <SimpleCard title="Users">
          <Table style={{ whiteSpace: "pre" }}>
            <TableHead>
              <TableRow>
                <TableCell className="px-0" align="center">User Name</TableCell>
                <TableCell className="px-0" align="center">Email</TableCell>
                <TableCell className="px-0" align="center">Total Profit</TableCell>
                <TableCell className="px-0" align="center">Network Size</TableCell>
                <TableCell className="px-0" align="center">Delete Account</TableCell>
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
                    {subscriber.profit}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    {subscriber.network}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="center">
                    <Button variant="outlined" color="primary">Delete</Button>
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

export default AffiliateManagerForm;
