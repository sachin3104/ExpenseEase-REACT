import {useState} from 'react';

import ExpenceDate from "./ExpenceDate";
import "./ExpenceItem.css";
import Card from '../UI/Card';

function ExpenceItem(props) {

  const [title, setTitle] = useState(props.title);
  
  const clickHandler =()=>{
    setTitle('Updated!');
  };
  
  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Title-Changer</button>
    </Card>
  );
}

export default ExpenceItem;