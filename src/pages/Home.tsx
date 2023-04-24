import { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';

import { Categories, Sorting, PizzaBlock, Skeleton, Pagination } from '../components';
import { setCategoryId } from '../redux/slices/filterSlice';
import { SearchContext } from '../App';
import { useDispatch } from 'react-redux';

export const Home = () => {
  const categoryId = useSelector((state: RootState) => state.filterSlice.categoryId);
  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  console.log(categoryId);

  useEffect(() => {
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    setIsLoading(true);

    fetch(
      `https://6436da148205915d34fe9ac0.mockapi.io/pizzas?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((response) => response.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>);
  const pizzasItems = pizzas.map((pizza: PizzaInfo, index) => <PizzaBlock key={index} {...pizza} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sorting
          value={sortType}
          onClickSortType={(name: string, sortProperty: string) => setSortType({ name, sortProperty })}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items"> {isLoading ? skeleton : pizzasItems}</div>
      <Pagination onChangePage={(number: number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
