import { useState } from 'react';
import styles from './Sorting.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSortId } from '../../redux/slices/filterSlice';

const sortingList = [
  { name: 'популярности (по убыванию)', sortProperty: 'rating' },
  { name: 'популярности (по возрастанию)', sortProperty: '-rating' },
  { name: 'цене (по убыванию', sortProperty: 'price' },
  { name: 'цене по возрастанию)', sortProperty: '-price' },
  { name: 'алфавиту (по убыванию)', sortProperty: 'title' },
  { name: 'алфавиту (по возрастанию)', sortProperty: '-title' },
];

export const Sorting = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filterSlice.sortId);

  const [isVisiblePopup, setVisiblePopup] = useState<boolean>(false);

  const onClickListItem = (obj: SortTypeInfo) => {
    dispatch(setSortId(obj));
    setVisiblePopup(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sort__label}>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>{' '}
        <b>Сортировка по:</b>
        <span onClick={() => setVisiblePopup(!isVisiblePopup)}>{sort.name}</span>
      </div>
      {isVisiblePopup && (
        <div className={styles.sort__popup}>
          <ul>
            {sortingList.map((obj: SortTypeInfo, index) => (
              <li
                key={index}
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
