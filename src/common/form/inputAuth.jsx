import React from 'react'
import If from '../operator/if'

export default props => (
    <If test={!props.hide}>
        <div className="form-group">
        <label htmlFor={props.name}>{props.placeholder}</label>
            <input {...props.input}
                className='form-control'
                id={props.name}
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type} />
        </div>
    </If>
)