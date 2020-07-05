import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";

import axios from "axios";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  table: {
    border: "2px solid black",
    backgroundColor: "lightgrey",
    margin: "auto",
    marginTop: "10vh",
    width: "95%",
  },
});

toast.configure({
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});

export default function HistoryTable() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const reduxAuth = useSelector((state) => state.auth);

  //get profile from database
  React.useEffect(() => {
    //get token from redux, if user refreshed then from localstorage
    let token = reduxAuth.user.token
      ? reduxAuth.user.token
      : localStorage.getItem("authtoken");
    axios({
      method: "GET",
      url: "http://localhost:8080/fuelform/get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.quotes);
          setData(res.data.quotes);
          toast.success("Quotes Retrieved from DB!");
        }
        if (res.data.error) {
          toast.error(res.data.error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

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
            <TableCell>{row.gallonsRequested}</TableCell>
            <TableCell>{row.deliveryDate}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>{row.amountDue}</TableCell>
            <TableCell>{row.deliveryAddress}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
