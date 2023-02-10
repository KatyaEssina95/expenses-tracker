import './ExpenseDate.css'

function ExpenseDate(props) {
  const month = props.date.toLocaleDateString('en-us', { month: 'long' });
  const day = props.date.toLocaleDateString('en-us', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  )
}

export default ExpenseDate;
