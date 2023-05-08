import { Link, useLocation } from 'react-router-dom';

import pizzaLogo from '../../assets/img/pizza-logo.svg';
import styles from './Header.module.scss';
import { Button } from '../Button/Button';
import { Search } from '../Search/Search';

export const Header: React.FC = () => {
  const location = useLocation();

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
        <Search />
        <div className={styles.container__cart}>{location.pathname !== '/cart' && <Button />}</div>
      </div>
    </div>
  );
};
