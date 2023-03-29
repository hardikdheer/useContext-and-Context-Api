import React, {useContext} from 'react'
import { AppState } from '../App'
import '../App.css';

const ComC = () => {
    const appData=useContext(AppState)
  return (
    <div className='compc'>
    <h1>ComC</h1>
    <h2>{appData.data}</h2>
    <h2>{appData.name.gender}</h2>
    <h2>{appData.name.age}</h2>
    
    </div>
  )
}

export default ComC