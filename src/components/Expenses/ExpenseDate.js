const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString('en-us', { month: 'long' });
  const day = props.date.toLocaleDateString('en-us', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="flex flex-col items-center bg-gray-50 p-4 rounded border">
      <div className="font-bold text-lg">{month}</div>
      <div>{year}</div>
      <div className="text-3xl font-bold pt-1">{day}</div>
    </div>
  )
}

export default ExpenseDate;
