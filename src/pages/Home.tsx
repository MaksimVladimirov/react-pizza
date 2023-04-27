import { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { Categories, Sorting, PizzaBlock, Skeleton, Pagination } from '../components';
import { setCategoryId } from '../redux/slices/filterSlice';
import { SearchContext } from '../App';
import { useDispatch } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sortId } = useSelector((state: RootState) => state.filterSlice);

  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    const order = sortId.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortId.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    setIsLoading(true);
    axios
      .get(
        `https://6436da148205915d34fe9ac0.mockapi.io/pizzas?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((response) => {
        setPizzas(response.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortId.sortProperty, searchValue, currentPage]);

  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>);
  const pizzasItems = pizzas.map((pizza: PizzaInfo, index) => <PizzaBlock key={index} {...pizza} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sorting />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items"> {isLoading ? skeleton : pizzasItems}</div>
      <Pagination onChangePage={(number: number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
