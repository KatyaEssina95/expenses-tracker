function Card(props) {
  const classes = "rounded-lg border " + props.className
  return <div className={classes}>{props.children}</div>
}

export default Card;
