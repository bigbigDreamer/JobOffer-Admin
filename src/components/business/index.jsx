import React, {Component} from "react"
import {Tabs, Select, Table, Button, Modal, Divider, message} from 'antd';
import "./business.less"
import {findAll, deleteById} from "../../apis/business"

const {Option} = Select;
const {confirm} = Modal;
const provinceData = ['甘肃省', '江苏省'];
const cityData = {
    '甘肃省': ['兰州市', '张掖市', '武威市'],
    '江苏省': ['苏州市', 'Suzhou', 'Zhenjiang'],
};

const {TabPane} = Tabs;

function callback(key) {
    console.log(key);
}

export default class Business extends Component {
    state = {
        cities: cityData[provinceData[0]],
        secondCity: cityData[provinceData[0]][0],
        // 表头
        columns: [
            {
                title: '企业名称',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '联系人',
                dataIndex: 'contactName',
                key: 'contactName'
            },
            {
                title: '联系方式',
                dataIndex: 'contactPhone',
                key: 'contactPhone',
            },
            {
                title: '行业',
                dataIndex: 'industry',
                key: 'industry',
            },
            {
                title: '所在地',
                dataIndex: 'location',
                key: 'location',
            },
            {
                title: '公司规模',
                dataIndex: 'scale',
                key: 'scale',
            },
            {
                title: '详情',
                key: 'detail',
                render: (text, record) => {
                    return (
                        <Button onClick={() => this.showModal(record)}>详情</Button>
                    )
                }
            },
            {
                title: '操作',
                key: 'option',
                render: (text, record) => {
                    return (
                        <div>
                            <Button type={"primary"} size={"small"} onClick={() => this.handleUpdate(record)}>修改</Button>
                            &nbsp;
                            <Button type={"danger"} size={"small"} onClick={() => this.handleDel(record)}>删除</Button>
                        </div>
                    )
                }
            },
        ],
        // 表格数据
        data: [
            {
                "id": 2355,
                "name": "蒙牛伊利5599",
                "contactName": "钱多多",
                "contactPhone": "10086",
                "industry": "",
                "location": "江苏",
                "scale": "500-1000人",
                "establishedTime": "",
                "registeredCapital": "",
                "description": "",
                "businessLicense": "",
                "status": "待审核",
                "province": null,
                "city": null
            },
        ],
        // 表格加载
        loading: true,
        // 模态框
        visible: false,
        // 模态框数据
        modalData: {},
    };

    // 改变省份
    handleProvinceChange = value => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    };

    // 改变城市
    onSecondCityChange = value => {
        this.setState({
            secondCity: value,
        });
    };


    handleChange = () => {

    };

    // 删除数据
    handleDel = (data) => {

        confirm({
            title: '你确定删除当前数据吗?',
            content: '如果不确定可以点击取消',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk: () => {
                deleteById({
                    id: 8888
                })
                    .then(data => {
                        // console.log(data, "删除");
                        if (data.status === 200) {
                            message.success('删除成功！');
                            findAll()
                                .then(data => {
                                    if (data) {
                                        this.setState({
                                            data: data.data,
                                            loading: false
                                        })
                                    }

                                })
                        } else {

                        }
                    })
                    .catch(err => Promise.reject(err));
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    // 模态框事件
    showModal = (data) => {
        // console.log(data);

        this.setState({
            visible: true,
            modalData: data
        });
    };

    // 点击确定
    handleOk = e => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };

    // 点击取消
    handleCancel = e => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };


    // 组件挂在完毕
    componentDidMount() {

        // 查询所有数据
        findAll()
            .then(data => {
                if (data) {
                    this.setState({
                        data: data.data,
                        loading: false
                    })
                }

            })
    }

    render() {
        const {cities, columns, data, loading, visible, modalData,visibleUpdate} = this.state;

        // 选中行
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };

        return (
            <div className="business">
                <Tabs
                    style={{boxShadow: '0 0 8px #ededed', height: '100%', padding: "0 18px"}}
                    defaultActiveKey="1"
                    onChange={callback}>
                    <TabPane tab="商家列表" key="1">
                        {/*顶部搜索框组*/}
                        <div className={"selectGroup"}>

                            {/*省份级联*/}
                            <Select
                                // defaultValue={provinceData[0]}
                                style={{width: 130}}
                                size={"large"}
                                onChange={this.handleProvinceChange}
                                placeholder={"省份"}
                            >
                                {provinceData.map(province => (
                                    <Option key={province}>{province}</Option>
                                ))}
                            </Select>
                            &emsp;
                            <Select
                                style={{width: 130}}
                                size={"large"}
                                // value={this.state.secondCity}
                                onChange={this.onSecondCityChange}
                                placeholder={"城市"}
                            >
                                {cities.map(city => (
                                    <Option key={city}>{city}</Option>
                                ))}
                            </Select>
                            &emsp;
                            {/*行业*/}
                            <Select
                                size={"large"}
                                placeholder={"行业"}
                                style={{width: 130}}
                                onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                            &emsp;
                            {/*规模*/}
                            <Select
                                size={"large"}
                                placeholder={"规模"}
                                style={{width: 130}}
                                onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>

                        {/*数据表*/}
                        <div className="table">
                            <Table
                                rowSelection={rowSelection}
                                columns={columns}
                                loading={loading}
                                pagination={{
                                    pageSize:5
                                }}
                                dataSource={data}/>
                            {/*详细信息模态框*/}
                            <Modal
                                title={modalData.name}
                                visible={visible}
                                onOk={this.handleOk}
                                className={"modal"}
                                onCancel={this.handleCancel}
                                okText={"确定"}
                                cancelText={"取消"}
                            >
                                <div className="top" style={{
                                    margin: 0,
                                    padding: 0,
                                    fontSize: 12,
                                }}>
                                    <div>{modalData.industry}</div>
                                    <div>{modalData.scale}</div>
                                </div>
                                <Divider/>
                                <div className="content">
                                    <p>行业类型: {modalData.industry}</p>
                                    <p>成立时间: {modalData.establishedTime}</p>
                                    <p>注册资本: {modalData.registeredCapital}</p>
                                </div>
                                <Divider/>
                                <div className="description"
                                     style={{
                                         margin: 0,
                                         padding: 0,
                                         fontSize: 12,
                                     }}>
                                    <p>{
                                        modalData.description
                                    }</p>
                                </div>
                            </Modal>
                        </div>
                    </TabPane>
                </Tabs>,
            </div>
        )
    }
}