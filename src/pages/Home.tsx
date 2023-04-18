import { useEffect, useState } from 'react';
import { PizzaInfo } from '../components';

import { Categories, Sorting, PizzaBlock, Skeleton } from '../components';

export const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      categoryId !== 0
        ? 'https://6436da148205915d34fe9ac0.mockapi.io/pizzas?category=' + categoryId
        : 'https://6436da148205915d34fe9ac0.mockapi.io/pizzas'
    )
      .then((response) => response.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [categoryId]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id: number) => setCategoryId(id)} />
        <Sorting />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>)
          : pizzas.map((pizza: PizzaInfo, index) => <PizzaBlock key={index} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;
