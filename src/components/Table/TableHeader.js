import React from "react";
import "./TableHeader.css";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="table-head" style={{ paddingLeft: "0px" }}>
          Sun
        </th>
        <th className="table-head">Mon</th>
        <th className="table-head">Tue</th>
        <th className="table-head">Wed</th>
        <th className="table-head">Thu</th>
        <th className="table-head">Fri</th>
        <th className="table-head" style={{ paddingRight: "0px" }}>
          Sat
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
