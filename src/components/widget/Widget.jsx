import React from "react";
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function Widget({ type }) {
  let data;

  //temporary for ui part
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (<PersonOutlinedIcon 
          className="icon" 
          style={{
            backgroundColor: "rgba(255, 0, 0, 0.2",
            color: "crimeson",
          }}
        />),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all Orders",
        icon: (<ShoppingCartOutlinedIcon 
          className="icon" 
          style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (<MonetizationOnOutlinedIcon 
          className="icon"
          style= {{
            backgroundColor: "rgba(0, 128, 0, 0.2)",
            color: "green",
          }}
        />),
      };
      break;
    case "balance":
      data={
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (<AccountBalanceWalletOutlinedIcon 
          className="icon"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple",
          }}
      />),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
