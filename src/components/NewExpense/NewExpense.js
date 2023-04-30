import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [previewFrom, setPreviewForm] = useState(false);

  const saveExpenseDataHandler = (entredExpenseData) => {
    const expenseData = {
      ...entredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setPreviewForm(false);
  };

  const addNewExpenseHandler = () => {
    setPreviewForm(true);
  };
  const stopPreview=()=>{
    setPreviewForm(false);
  };

  return (
    <div className="new-expense">
      {!previewFrom && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}

      {previewFrom && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancel={stopPreview}/>
      )}
    </div>
  );
};

export default NewExpense;
