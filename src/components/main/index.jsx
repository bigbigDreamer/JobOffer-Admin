import React, {Component} from "react"
import {BrowserRouter} from "react-router-dom"
import {Row} from "antd"
import SiderNav from "../sider_nav"
import Header from "../header"
import "./main.less"
import {Router} from "../../router"


export default class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={"main"}>
                    {/*侧栏导航*/}
                    <div className="sideNav">
                        <SiderNav/>
                    </div>
                    <div className="right">
                        {/* 右侧头 */}
                        <div className="header">
                            <Row>
                                <Header/>
                            </Row>
                        </div>
                        {/*右侧内容*/}
                        <div className="content">
                            {/*主内容区域*/}
                            <Row>
                                {/*路由组件*/}
                                <Router/>
                            </Row>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}