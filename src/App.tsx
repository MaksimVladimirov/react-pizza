import { Header } from './components';
import './App.scss';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Home />
          <NotFound />
        </div>
      </div>
    </div>
  );
}

export default App;
