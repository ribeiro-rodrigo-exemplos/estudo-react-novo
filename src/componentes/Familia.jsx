import React from 'react'
import {filhosComProps} from '../utils/utils'


export default props => 
    <div>
        <h1>Família</h1>
        {/*React.cloneElement(props.children,
            { sobrenome : props.sobrenome })*/}
        {filhosComProps(props)}
        { /*React.Children.map(props.children, child =>  React.cloneElement(child, { ...props }) ) */}
        { /*props.children.map(children => React.cloneElement(children, {...props} )) */}
        {/*React.cloneElement(props.children, { ...props })*/}
        {/*React.cloneElement(props.children,props)*/}
        {}
    </div>