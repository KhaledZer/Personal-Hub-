import ExpenseTracker from './components/ExpenseTracker';
import TodoList from './components/TodoList';
import WeatherWidget from './components/WeatherWidget';
import { sectionClass, headerClass } from './styles/classes';

const App = () => {
  return (
    <main>
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-800">My Personal Hub</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 py-8">
        <section className={sectionClass}>
          <h2 className={headerClass}>Expense Tracker</h2>
          <ExpenseTracker />
        </section>
        <section className={sectionClass}>
          <h2 className={headerClass}>Todo List</h2>
          <TodoList />
        </section>
        <section className={sectionClass}>
          <h2 className={headerClass}>Crypto Weather</h2>
          <WeatherWidget />
        </section>
      </div>
    </main>
  );
}

export default App;
