import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                onClick={props.handleDeleteOptions}
                className="button button--link"
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Enter some options to get started!</p>}
        {
            props.options.map((option, index) => (
                <Option
                    handleDeleteOption={props.handleDeleteOption}
                    key={option}
                    count={index + 1} 
                    option={option}   
                />
            ))
        }
    </div>
)



export default Options