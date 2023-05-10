import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import qs from 'qs';

import { selectPizzaData } from '../redux/slices/pizzasSlice';
import { Categories, Sorting, PizzaBlock, Skeleton, Pagination, sortingList } from '../components';
import { setCategoryId, setCurrentPageCount, setFilters, selectFilter } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzasSlice';
import { useAppDispatch } from '../redux/store';
import { SearchPizzaParams } from '../redux/slices/pizzasSlice';

export const Home: React.FC = () => {
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);
  const isMounted = useRef(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);

  const onChangeCategory = (index: number) => {
    dispatch(setCategoryId(index));
  };

  const onChangePage = (number: number) => {
    dispatch(setCurrentPageCount(number));
  };

  const getPizzas = async () => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage,
      })
    );
  };

  // Если был первый рендер запрашиваем пиццы
  useEffect(() => {
    // window.scrollTo(0, 0);
    // if (!isSearch.current) {
    getPizzas();
    // }

    // isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // // При первом рендере не вшивать параметры в URL
  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       currentPage,
  //     });
  //     navigate(`?${queryString}`);
  //   }
  //   isMounted.current = true;
  // }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // // Если был первый рендер, то проверяем URL- параметры и сохраняем в REDUX
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
  //     const sort = sortingList.find((object) => object.sortProperty === params.sortBy);
  //     dispatch(
  //       setFilters({
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         searchValue: params.search,
  //         sort: sort || sortingList[0],
  //       })
  //     );
  //     isSearch.current = true;
  //   }
  // }, []);

  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>);
  const pizzasItems = items.map((pizza: PizzaInfo) => <PizzaBlock {...pizza} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sorting />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div>
          <h2 className="content__error-info">Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить пиццы. Попробуйте обновить страницу</p>
        </div>
      ) : (
        <div className="content__items"> {status === 'loading' ? skeleton : pizzasItems}</div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
