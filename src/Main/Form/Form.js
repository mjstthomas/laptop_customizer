import React from 'react'
import List from './List'
import Header from './Header'

export default function Customizer(props){
    return (
    	<form className="main__form">
            <Header />
            <List Features={props.Features} features={props.features} />
         </form>)
}