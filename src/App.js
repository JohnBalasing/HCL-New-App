import ExpenseItem from './Components/ExpenseItem'
import AddExpense from './Components/AddExpense';

function App(props) {

    const expenses = [
      {id: 1, title: 'Mobile bill', amount: 500, date: new Date(2020, 8, 10)},
      {id: 2, title: 'Car Insurance', amount: 400, date: new Date(2020, 9, 10)},
      {id: 3, title: 'House rent', amount: 700, date: new Date(2020, 11, 10)},
      {id: 4, title: 'Dress purchase', amount: 1000, date: new Date(2020, 4, 10)}
    ]
  return (
    <div>
      <AddExpense/>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>
  );
}

export default App;
