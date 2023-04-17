import { useState } from 'react';
import styles from './Categories.module.scss';

export const Categories = () => {
  const [category, setCategory] = useState(0);
  const pizzaCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className={styles.categories}>
      <ul>
        {pizzaCategories.map((categoryItem, index) => (
          <li key={index} onClick={() => setCategory(index)} className={category === index ? `${styles.active}` : ''}>
            {categoryItem}
          </li>
        ))}
      </ul>
    </div>
  );
};
