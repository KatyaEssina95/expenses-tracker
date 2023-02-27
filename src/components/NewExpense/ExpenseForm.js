const ExpenseForm = () => {
  return (
    <form className="space-y-2">
      <div className="flex flex-col">
        <label className="font-medium">Title</label>
        <input className="rounded p-2 border" type="text"/>
      </div>
      <div className="flex flex-col">
        <label className="font-medium">Amount</label>
        <input className="rounded p-2 border" type="number" min="0.01" step="0.01"/>
      </div>
      <div className="flex flex-col">
        <label className="font-medium">Date</label>
        <input className="rounded p-2 border" type="date" min="2019-01-01" max="2022-12-2023"/>
      </div>
      <div className="flex flex-col pt-4">
        <button type="submit" className="p-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-medium">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
