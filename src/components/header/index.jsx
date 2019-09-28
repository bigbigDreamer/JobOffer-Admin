import React, {Component} from "react"
import {Row, Col, Badge, Icon} from "antd"
import "./header.less"

export default class Index extends Component {
    render() {
        return (
            // 头部
            <div className={"header"}>
                <Row type="flex" justify="end"  style={{paddingRight:28}}>
                    <Col span={2}>
                        <Badge dot >
                            <Icon type="notification" style={{fontSize:"20px"}}/>
                        </Badge>
                    </Col>
                    <Col span={2} style={{boxSizing:"border-box",paddingTop:10}}>
                        <Badge count={<Icon type="clock-circle" style={{color: '#f5222d'}}/>}>
                            <a href="#" className="head-example"/>
                            <div style={{width: 30, height: 30, backgroundColor: "#ededed"}}>
                            </div>
                        </Badge>
                    </Col>
                    <Col span={2} >
                        <Badge dot>
                            <a href="#">John Doe</a>
                        </Badge>
                    </Col>
                </Row>
            </div>
        )
    }
}