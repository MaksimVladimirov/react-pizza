import pizzaLogo from '../../assets/img/pizza-logo.svg';
import styles from './Header.module.scss';
// import styles from '../Button/Button.module.scss';
import { Button } from '../Button/Button';
import { Search } from '../Search/Search';
import { Link } from 'react-router-dom';



export const Header = ({ searchValue, setSearchValue }: SearchProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.header__logo}>
            <img width="38" src={pizzaLogo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className={styles.container__cart}>
          <Button />
        </div>
      </div>
    </div>
  );
};
