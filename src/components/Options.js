import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Enter some options to get started!</p>}
        <ol>
            {props.options.map(option => {
                return (
                    <Option
                        handleDeleteOption={props.handleDeleteOption}
                        key={option} 
                        option={option}   
                    />
                )
            })}
        </ol>
    </div>
)



export default Options