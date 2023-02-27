import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 124.23,
      date: new Date(2022, 2, 28)
    },
    {
      title: "Groceries",
      amount: 224.23,
      date: new Date(2022, 2, 28)
    }
  ];

  return (
    <div className="max-w-screen-lg mx-auto pt-12 px-4 lg:px-0 text-gray-700">
      <NewExpense/>
      <Expenses expenses={expenses}/>
    </div>
  )
}
export default App;
