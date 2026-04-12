import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../Data/data";
import GeneralContext from "./GeneralContext";
import { Doughnutchart } from "./Doughnutchart";
import {
  BarChartOutlined,
  BorderColor,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

const WatchList = () => {

  const labels= watchlist.map((subArray) =>subArray["name"]);
  const data = {
    labels,
    datasets:[
      {
        label:"Price",
        data : watchlist.map((stock) => stock.price),
        backgroundColor:[
          "rgb(255,148,132,0.5)",
          "rgb(25,145,132,0.5)",
          "rgb(55,124,132,0.5)",
          "rgb(155,250,129,0.5)",
          "rgb(75,169,182,0.5)",
          "rgb(125,199,100,0.5)",
          "rgb(125,55,100,0.5)",
          "rgb(125,55,200,0.5)",
        ],
        backgroundColor:[
          "rgb(255,148,132,1)",
          "rgb(25,145,132,1)",
          "rgb(55,124,132,1)",
          "rgb(155,250,129,1)",
          "rgb(75,169,182,1)",
          "rgb(125,199,100,1)",
          "rgb(125,55,100,1)",
          "rgb(125,55,200,1)",
        ]
      }
   ]
  }


  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <Doughnutchart data = {data}/>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={`menu_left_stock_name ${stock.isDown ? "down" : "up"}`}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent"> {stock.percent} </span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price"> {stock.price} </span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {

    const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy(B)" placement="top" arrow TransitionComponent={Grow}
          onClick={handleBuyClick}>
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip title="Sell(S)" placement="top" arrow>
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip title="Analytics(A)" placement="top" arrow>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow>
          <button className="action">
            <MoreHoriz className="icon"/>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
