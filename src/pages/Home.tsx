import { useEffect, useState } from 'react';
import { PizzaInfo } from '../components';

import { Categories, Sorting, PizzaBlock, Skeleton } from '../components';

export const Home = () => {
  const [pizzas, setPizzas] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  useEffect(() => {
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    setIsLoading(true);

    fetch(`https://6436da148205915d34fe9ac0.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`)
      .then((response) => response.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id: number) => setCategoryId(id)} />
        <Sorting
          value={sortType}
          onClickSortType={(name: string, sortProperty: string) => setSortType({ name, sortProperty })}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {' '}
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>)
          : pizzas.map((pizza: PizzaInfo, index) => <PizzaBlock key={index} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;
