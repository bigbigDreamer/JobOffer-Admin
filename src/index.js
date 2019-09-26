import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import App from "./containers/app"
import store from "./store"
import "./assets/css/global.less"

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>,document.getElementById("root"));