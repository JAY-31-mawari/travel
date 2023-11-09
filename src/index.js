import React from 'react'
import ReactDOM from 'react-dom'
import TravelProvider from './state/TravelProvider'
import App from './App'

ReactDOM.render(<TravelProvider>
    <App />
</TravelProvider> ,document.querySelector("#root"))