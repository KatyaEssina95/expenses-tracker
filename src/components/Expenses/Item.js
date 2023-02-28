import Card from "../UI/Card";
import ExpenseDate from './Date'
import ExpenseAmount from "./Amount";

const ExpenseItem = (props) => {
  return (
    <Card className="bg-white flex flex-row items-center p-4 space-x-6">
      <ExpenseDate date={props.date}/>
      <h2 className="font-bold">{props.title}</h2>
      <ExpenseAmount amount={props.amount}/>
    </Card>
  )
}

export default ExpenseItem;
