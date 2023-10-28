import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading,cockTail} = useGlobalContext()
  if(loading){
    return <Loading/>
  }
  if(cockTail.length<1){
    return (
      <h2  className='section-title'>nothing found
      </h2>
    )
  }
  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default CocktailList
