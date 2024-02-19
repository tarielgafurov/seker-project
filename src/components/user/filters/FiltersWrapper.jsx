import React from 'react'
import FilterByPrice from './FilterByPrice'
import FilterColor from './FilterColor'
import FilterModel from './FilterModel'

const FiltersWrapper = () => {
  return (
    <div>
      <FilterByPrice/>
      <FilterColor/>
      <FilterModel/>
    </div>
  )
}

export default FiltersWrapper
