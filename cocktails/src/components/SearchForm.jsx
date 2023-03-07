import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const handleSubmit = () => {

  }

  const searchValue = () => {

  }

  const searchCocktail = () => {

  }

  const { setSearchTerm } = useGlobalContext();
  return (
    <section className='search-center section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm