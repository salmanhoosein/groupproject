import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    border: "2px solid black",
    backgroundColor: "lightgrey",
    margin: "auto",
    marginTop: "10vh",
    width: "95%",
  },
});

const data = [
  {
    gallons: 1,
    DeliveryDate: "01-12-12",
    Price: 12,
    AmountDue: 12,
    DeliveryAddress: "123 test address",
  },
  {
    gallons: 1,
    DeliveryDate: "01-12-12",
    Price: 12,
    AmountDue: 12,
    DeliveryAddress: "123 test address",
  },
  {
    gallons: 1,
    DeliveryDate: "01-12-12",
    Price: 12,
    AmountDue: 12,
    DeliveryAddress: "123 test address",
  },
  {
    gallons: 1,
    DeliveryDate: "01-12-12",
    Price: 12,
    AmountDue: 12,
    DeliveryAddress: "123 test address",
  },
  {
    gallons: 1,
    DeliveryDate: "01-12-12",
    Price: 12,
    AmountDue: 12,
    DeliveryAddress: "123 test address",
  },
  {
    gallons: 1,
    DeliveryDate: "01-12-12",
    Price: 12,
    AmountDue: 12,
    DeliveryAddress: "123 test address",
  },
];

export default function HistoryTable() {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Gallons Requested</TableCell>
          <TableCell>Delivery Date</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Amount Due</TableCell>
          <TableCell>Delivery Address</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.gallons}</TableCell>
            <TableCell>{row.DeliveryDate}</TableCell>
            <TableCell>{row.Price}</TableCell>
            <TableCell>{row.AmountDue}</TableCell>
            <TableCell>{row.DeliveryAddress}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
