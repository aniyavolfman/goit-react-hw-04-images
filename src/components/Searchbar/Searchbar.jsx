import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import css from './Searchbar.module.css';

export function Searchbar(props) {
  const [name, setName] = useState('');

  const handleInput = event => {
    setName(event.target.value);
  };

    const { onSubmit } = props;

    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={onSubmit}>
          <button type="submit" className={css.button}>
            <ImSearch />
            <span className={css.buttonLabel}>Search</span>
          </button>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="name"
            value={name}
            onChange={handleInput}
          />
        </form>
      </header>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
