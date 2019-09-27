import React, {Component} from "react"
import {Row, Col, Card, Icon,Button} from "antd"
import "./home.less"
import {Tabs,Table,Divider,Badge} from 'antd';

const {TabPane} = Tabs;

function callback(key) {
    console.log(key);
}

export default class Home extends Component {
    state = {
        dataSource: [
            {
                key: '1',
                name: '58同城',
                contact: "王彬林",
                contactInformation: 15103914826,
                ApplicationTime:"2019/10/1"
            },
            {
                key: '1',
                name: '字节跳动',
                contact: "万伟亮",
                contactInformation: 17394568957,
                ApplicationTime:"2019/10/1"
            },
            {
                key: '1',
                name: '阿里巴巴',
                contact: "王杰",
                contactInformation: 13356897546,
                ApplicationTime:"2019/10/1"
            },
            {
                key: '1',
                name: '京东商城',
                contact: "张田伟",
                contactInformation: 18856984756,
                ApplicationTime:"2019/10/1"
            },

        ],

        columns: [
            {
                title: '企业名称',
                dataIndex: 'name',
                key: 'name',
                // width: "80px"
            },
            {
                title: '联系人',
                dataIndex: 'contact',
                key: 'contact',
            },
            {
                title: '联系方式',
                dataIndex: 'contactInformation',
                key: 'contactInformation',
            },
            {
                title: '申请时间',
                dataIndex: 'ApplicationTime',
                key: 'ApplicationTime',
            },
            {
                title: '详细信息',
                dataIndex: 'Details',
                key: 'Details',
                render:_ =>(
                    <a >查看</a>
                )
            },
            {
                title: '操作',
                dataIndex: 'option',
                key: 'option',
                render:_ =>(
                    <div>
                        <Button type={"success"} size={"small"}>通过</Button>
                        <Button type={"danger"} size={"small"}>拒绝</Button>
                    </div>
                )
            },
        ]
};
render()
{
    const {dataSource,columns} = this.state;
    return (
        <div className={"home"}>
            {/*四个卡片部位*/}
            <Row gutter={16}>
                <Col span={6}>
                    <Card style={{width: "100%", boxShadow: "0 0 10px #ededed"}} bordered={false}>
                        <div className="card">
                            <div className="info">
                                <p>32118</p>
                                <p>简历</p>
                            </div>
                            <div className="icon">
                                <Icon type="file-done"/>
                            </div>
                        </div>
                    </Card>,
                </Col>
                <Col span={6}>
                    <Card style={{width: "100%", boxShadow: "0 0 10px #ededed"}} bordered={false}>
                        <div className="card">
                            <div className="info">
                                <p>3125</p>
                                <p>用户</p>
                            </div>
                            <div className="icon">
                                <Icon type="user"/>
                            </div>
                        </div>

                    </Card>,
                </Col>
                <Col span={6}>
                    <Card style={{width: "100%", boxShadow: "0 0 10px #ededed"}} bordered={false}>
                        <div className="card">
                            <div className="info">
                                <p>614</p>
                                <p>商家</p>
                            </div>
                            <div className="icon">
                                <Icon type="trademark"/>
                            </div>
                        </div>

                    </Card>,
                </Col>
                <Col span={6}>
                    <Card style={{width: "100%", boxShadow: "0 0 10px #ededed"}} bordered={false}>
                        <div className="card">
                            <div className="info">
                                <p>213213</p>
                                <p>浏览</p>
                            </div>
                            <div className="icon">
                                <Icon type="eye"/>
                            </div>
                        </div>
                    </Card>,
                </Col>
            </Row>

            {/*内容区域*/}
            <Row gutter={25}>
                <Col span={15}>
                    {/*待审核内容*/}
                    <Card
                        title={"待审核"}
                        style={{width: "100%", boxShadow: "0 0 10px #ededed"}}
                        bordered={false}>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="商家" key="1">
                                <Table dataSource={dataSource} columns={columns}/>;
                            </TabPane>
                            <TabPane tab="招聘" key="2">
                                招聘
                            </TabPane>

                        </Tabs>,
                    </Card>,
                </Col>
                <Col span={9}>
                    {/*热门招聘*/}
                    <Card
                        title={"热门招聘"}
                        style={{width: "100%", boxShadow: "0 0 10px #ededed"}}
                        bordered={false}>
                        <div>前端高级工程师 <Badge count={25} /></div>
                        <Divider />
                        <div>算法工程师 <Badge count={15} /></div>
                        <Divider />
                        <div>UI设计师 <Badge count={28} /></div>
                        <Divider />
                        <div>Python工程师 <Badge count={2} /></div>
                        <Divider />
                        <div>产品专员 <Badge count={9} /></div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
}