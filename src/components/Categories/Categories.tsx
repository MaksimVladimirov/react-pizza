import { useState } from 'react';
import './Categories.scss';

export const Categories = () => {
  const [category, setCategory] = useState(0);
  const pizzaCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map((categoryItem, index) => (
          <li key={index} onClick={() => setCategory(index)} className={category === index ? 'active' : ''}>
            {categoryItem}
          </li>
        ))}
      </ul>
    </div>
  );
};
