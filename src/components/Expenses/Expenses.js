import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenseArray = props.item.filter((filteredExpense) => {
    return filteredExpense.date.getUTCFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenseArray} />
        <ExpensesList item={filteredExpenseArray} />
      </Card>
    </div>
  );
}

export default Expenses;
