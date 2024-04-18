import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import TableHeader from "./components/Table/TableHeader";
import TableTitle from "./components/Table/TableTitle";
import { generateThisMonthDates } from "./util/DateGenerate";
import TableRow from "./components/Table/TableRow";
import { preMonthDateObj, NextMonthDateObj } from "./util/DateGenerate";

function App() {
  const [currentMonthDates, setCurrentMonthDates] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [pickedDate, setPickedDate] = useState();

  const fetchCurrentDate = (date, isPicked) => {
    setCurrentDate(() => date);
    if (!isPicked) {
      setPickedDate(() => null);
    }
    const dates = generateThisMonthDates(date);
    setCurrentMonthDates(() => [...dates]);
  };

  useEffect(() => {
    fetchCurrentDate(new Date());
    setPickedDate(() => {
      return new Date();
    });
  }, []);

  const pickDateHandler = (date) => {
    setPickedDate(() => date);
    if (date.getMonth() + 1 === currentDate.getMonth()) {
      fetchCurrentDate(preMonthDateObj(currentDate), true);
    } else if (date.getMonth() - 1 === currentDate.getMonth()) {
      fetchCurrentDate(NextMonthDateObj(currentDate), true);
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="table-container">
        <TableTitle
          onPress={fetchCurrentDate}
          currentDate={currentDate}
          pickedDate={pickedDate}
        />
        <table>
          <TableHeader />
          {currentMonthDates.map((dates) => {
            return (
              <TableRow
                dates={dates}
                changeDateHandler={fetchCurrentDate}
                currentDate={currentDate}
                pickedDate={pickedDate}
                pickDateHandler={pickDateHandler}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
