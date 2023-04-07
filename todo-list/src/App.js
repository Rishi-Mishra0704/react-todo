import './App.css';
import TodosLogic from './components/TodosLogic';
import Header from './Header';
const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
};
export default TodoApp;
