import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import './App.scss';

export const SearchContext = createContext<SearchContextType>({
  searchValue: '',
  setSearchValue: () => {},
});

function App() {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
