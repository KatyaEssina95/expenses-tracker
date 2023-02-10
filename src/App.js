import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {title: "Car Insurance", amount: 124.23, date: new Date(2022, 2, 28)},
    {title: "Groceries", amount: 224.23, date: new Date(2022, 2, 28)}
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
    </div>
  )
}
export default App;
