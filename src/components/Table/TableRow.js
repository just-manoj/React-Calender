import React from "react";
import "./TableRow.css";

function TableRow(props) {
  const { dates, currentDate, pickedDate, pickDateHandler } = props || {};

  const checkIsThisMonth = (date) => {
    if (date.getMonth() === currentDate.getMonth()) {
      return true;
    }
    return false;
  };

  const checkIsToday = (date) => {
    const today = new Date();
    if (date.toDateString() == today.toDateString()) {
      return true;
    }
    return false;
  };

  const checkIsPicked = (date) => {
    if (pickedDate != null) {
      if (date.toDateString() == pickedDate.toDateString()) {
        return true;
      }
    }
    return false;
  };

  return (
    <tr className="deteTextContainer">
      {dates.map((date) => {
        return (
          <td
            className="dateText"
            style={{
              ...(checkIsThisMonth(date)
                ? { color: "black" }
                : { color: "grey" }),
              ...(checkIsPicked(date) && {
                backgroundColor: "#ff4141",
                borderRadius: "50%",
                color: "white",
              }),
              ...(checkIsToday(date) && {
                backgroundColor: "#41ff70",
                borderRadius: "50%",
              }),
            }}
            onClick={() => pickDateHandler(date)}
          >
            {date.getDate()}
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;
