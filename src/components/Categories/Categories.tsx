import styles from './Categories.module.scss';

const pizzaCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories = ({ value, onChangeCategory }: { value: number, onChangeCategory: (index: number) => void }) => {
  

  return (
    <div className={styles.categories}>
      <ul>
        {pizzaCategories.map((categoryName, index) => (
          <li key={index} onClick={() => onChangeCategory(index)} className={value === index ? `${styles.active}` : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
