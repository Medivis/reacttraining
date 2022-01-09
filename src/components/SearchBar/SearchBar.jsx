import React, { useRef } from 'react'
import styles from './SearchBar.module.scss'
import Button from './../Button/Button'

export default function SearchBar(props) {

  const SearchRef = useRef()

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  function handleSearch() {
    const rawSearch = SearchRef.current.value;
    const searchString = rawSearch.trim().replace(/\s+/g, '+')

    //cant use history because query paramaters need a reload
    window.location = `/search?q=${searchString}`
  }

  return (
    <div className={styles.searchbar}>
      <input autoFocus ref={SearchRef} onKeyPress={handleKeyPress}
        type="text" placeholder="Hey, Wiki">
        </input>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  )
}
