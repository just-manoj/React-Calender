import React from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

import { MonthForDisplay, dateForDisplay } from "../../util/DateFormat";
import "./TableTitle.css";
import { NextMonthDateObj, preMonthDateObj } from "../../util/DateGenerate";

export default function TableTitle(props) {
  const { onPress, currentDate, pickedDate } = props || {};

  const displayDateHandler = () => {
    if (pickedDate == null) {
      return MonthForDisplay(currentDate);
    } else {
      return dateForDisplay(pickedDate);
    }
  };
  return (
    <div className="container">
      <p>{displayDateHandler()}</p>
      <div className="navigation-container">
        <FaLessThan
          color="grey"
          className="arrow"
          onClick={() => onPress(preMonthDateObj(currentDate))}
        />
        <FaGreaterThan
          color="grey"
          className="arrow"
          onClick={() => onPress(NextMonthDateObj(currentDate))}
        />
      </div>
    </div>
  );
}
