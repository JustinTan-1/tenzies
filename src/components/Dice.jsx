import React from 'react'

export default function Dice(props) {
    return (
        <div className={`dice ${props.toggled ? "toggled" :"untoggled"}`}>
            {props.value}
        </div>
    )
}