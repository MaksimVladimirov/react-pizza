import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import './App.scss';

const Cart = lazy(() => import(/* webpackChunkName: 'Cart' */ './pages/Cart'));
const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */ './pages/NotFound'));
const FullPizza = lazy(() => import(/* webpackChunkName: 'FullPizza' */ './pages/FullPizza'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <FullPizza />
            </Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
