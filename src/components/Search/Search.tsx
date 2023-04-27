import { useContext, useRef } from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { SearchContext } from '../../App';

// const testDebounce = debounce(() => {

// })

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current?.focus();
  };

  const onChangeInput = (event: any ) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.loupe}
        height="30"
        id="svg8"
        version="1.1"
        viewBox="0 0 24 24"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs2" />
        <g id="g1904" transform="matrix(0.75348183,-0.75348699,0.75348183,0.75348699,-225.10204,-207.04934)">
          <path
            d="m 17.60618,295.04472 c -3.10207,-3.10204 -8.1620102,-3.10337 -11.2640702,-10e-4 -3.10206,3.10204 -3.09945,8.16073 0.003,11.26278 1.31541,1.31541 2.98305,2.067 4.7034102,2.26683 l 10e-4,6.07723 c 5.2e-4,0.51831 0.42004,0.93891 0.93835,0.93835 0.51756,-5.2e-4 0.93783,-0.42079 0.93835,-0.93834 l -0.001,-6.07983 c 1.7122,-0.20389 3.37053,-0.95467 4.68007,-2.2642 3.10205,-3.10205 3.10333,-8.15943 0.001,-11.26149 z m -1.32716,1.32717 c 2.38482,2.3848 2.38353,6.22236 -10e-4,8.60714 -2.38479,2.38479 -6.22102,2.38478 -8.6058502,-3e-5 -2.38481,-2.3848 -2.38742,-6.22366 -0.003,-8.60844 2.3848002,-2.38477 6.2249202,-2.38347 8.6097302,10e-4 z"
            id="path1898"
          />
        </g>
      </svg>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы ..."
      />

      {searchValue && (
        <svg
          onClick={onClickClear}
          className={styles.search}
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
        </svg>
      )}
    </div>
  );
};
