import { useEffect, useState, useContext, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import { Categories, Sorting, PizzaBlock, Skeleton, Pagination, sortingList } from '../components';
import { setCategoryId, setCurrentPageCount, setFilters } from '../redux/slices/filterSlice';
import { SearchContext } from '../App';

export const Home = () => {
  const { categoryId, sortId, currentPage } = useSelector((state: RootState) => state.filterSlice);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState<[]>([]);
  const isMounted = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number: number) => {
    dispatch(setCurrentPageCount(number));
  };

  const fetchPizzas = () => {
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
  };

  // Если был первый рендер запрашиваем пиццы
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sortId.sortProperty, searchValue, currentPage]);

  // При первом рендере не вшивать параметры в URL
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortId.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortId.sortProperty, searchValue, currentPage]);

  // Если был первый рендер, то проверяем URL- параметры и сохраняем в REDUX
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortingList.find((object) => object.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

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
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
