import React, {Component} from "react"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import {Row, Col, Button} from "antd"
import SiderNav from "../sider_nav"
import "./main.less"


export default class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={"main"}>
                    <Row>
                        <Col span={7}>
                            {/*侧栏导航*/}
                            <div className="sideNav">
                                <SiderNav/>
                            </div>
                        </Col>
                        <Col span={17}>
                            {/* 右侧头 */}
                            <div className="header">
                                <Row>

                                </Row>
                            </div>
                            {/*右侧内容*/}
                            <div className="content">
                                <Button type={"primary"}>你好</Button>
                                {/*主内容区域*/}
                                <Row>
                                    <Switch>
                                        <Route/>
                                    </Switch>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </BrowserRouter>
        )
    }
}