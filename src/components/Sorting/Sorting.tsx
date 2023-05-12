import React, { useState, useRef, useEffect } from 'react';
import styles from './Sorting.module.scss';
import { useDispatch } from 'react-redux';
import { setSortId } from '../../redux/filter/slice';
import { Sort, SortPropertyEnum } from '../../redux/filter/types';

type SortingItems = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PopupClickType = {
  composedPath: () => any[];
};

export const sortingList: SortingItems[] = [
  { name: 'популярности (по возрастанию)', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'популярности (по убыванию)', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'алфавиту (по возрастанию)', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'алфавиту (по убыванию)', sortProperty: SortPropertyEnum.TITLE_ASC },
  { name: 'цене по возрастанию)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'цене (по убыванию', sortProperty: SortPropertyEnum.PRICE_ASC },
];

type SortPoppupProps = {
  value: Sort;
};

export const Sorting: React.FC<SortPoppupProps> = React.memo(({ value }) => {
  const [isVisiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const onClickListItem = (obj: SortingItems) => {
    dispatch(setSortId(obj));
    setVisiblePopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: PopupClickType) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setVisiblePopup(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className={styles.sort}>
      <div className={styles.sort__label}>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>{' '}
        <b>Сортировка по:</b>
        <span onClick={() => setVisiblePopup(!isVisiblePopup)}>{value.name}</span>
      </div>
      {isVisiblePopup && (
        <div className={styles.sort__popup}>
          <ul>
            {sortingList.map((obj: Sort, index) => (
              <li
                key={index}
                onClick={() => onClickListItem(obj)}
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
