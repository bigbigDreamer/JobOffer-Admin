import React from "react"
import Home from "../components/home";
import Business from "../components/business";
import NotFound from "../components/404";
import {Switch, Route} from "react-router-dom"

// 抽离路由组件
// 高内聚，低耦合
export const Router = () => {
    return (
        <Switch>
            <Route path={"/"} exact component={Home} pathname={"home"}/>
            <Route path={"/business"} component={Business}/>
            <Route component={NotFound}/>
        </Switch>
    )
};