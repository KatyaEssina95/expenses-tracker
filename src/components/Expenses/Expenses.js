import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <Card className="space-y-4 bg-gray-100 p-4 rounded-lg">
      {props.expenses.map((expenseItem, index) => (
        <ExpenseItem
          key={index}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        ></ExpenseItem>
      ))}
    </Card>
  )
}

export default Expenses;
