import { useState } from 'react';
import styles from './Categories.module.scss';

export const Categories = ({ value, onClickCategory }: any) => {
  const pizzaCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className={styles.categories}>
      <ul>
        {pizzaCategories.map((categoryName, index) => (
          <li key={index} onClick={() => onClickCategory(index)} className={value === index ? `${styles.active}` : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
