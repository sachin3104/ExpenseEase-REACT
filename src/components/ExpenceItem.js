import ExpenceDate from "./ExpenceDate";
import "./ExpenceItem.css";

function ExpenceItem(props) {
  return (
    <div className="expense-item">
      <ExpenceDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenceItem;
