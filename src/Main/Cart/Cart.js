import React from 'react'
import ChosenItems from './ChosenItems'
import Total from './Total'
import Header from './Header'

export default function Cart(props){
	return (
		<section className="main__summary">
            <Header />
            <ChosenItems summary={props.summary} />
            <Total total={props.total} USCurrencyFormat={props.USCurrencyFormat} />
         </section>)
	
}