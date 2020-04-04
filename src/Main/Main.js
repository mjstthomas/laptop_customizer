import React from 'react'
import Cart from './Cart/Cart'
import Form from './Form/Form'

export default function Main(props){
	return(
		<main>
          <Form features={props.features} Features={props.Features} updateFeature={props.updateFeature} />
          <Cart USCurrencyFormat={props.USCurrencyFormat} summary={props.summary} total={props.total}/>
        </main>)
}