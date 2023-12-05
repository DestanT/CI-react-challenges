import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';

function App() {
  return (
    <div className={css.App}>
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;