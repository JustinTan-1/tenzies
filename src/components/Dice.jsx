import React from 'react'

export default function Dice(props) {
    return (
        <div className={`dice ${props.isToggled ? "toggled" :"untoggled"}`} onClick={props.toggle}>
            {props.value}
        </div>
    )
}