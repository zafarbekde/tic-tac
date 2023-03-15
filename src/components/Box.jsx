import React from 'react'
import {Box} from '../components/Box.css'

export const Box = ({ value, onClick}) => {
    const style = value === "X" ? 'box x' : 'box o'
    return(
        <button className={style}>x</button>
    )
}