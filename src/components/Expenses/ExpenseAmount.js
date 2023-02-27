const ExpenseAmount = (props) => {
  return (
    <div className="flex-grow flex justify-end items-center">
      <div className="font-medium text-4xl bg-teal-700 text-white p-4 rounded-xl outline outline-2 outline-offset-2 outline-teal-300">
        £{props.amount}
      </div>
    </div>
  )
}

export default ExpenseAmount