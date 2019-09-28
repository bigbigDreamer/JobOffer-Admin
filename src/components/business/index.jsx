import React, {Component} from "react"
import {Tabs, Select, Table, Button} from 'antd';
import "./business.less"
import {findAll} from "../../apis/business"

const {Option} = Select;
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
                render: _ => {
                    return (
                        <Button>详情</Button>
                    )
                }
            },
            {
                title: '操作',
                key: 'option',
                render: (text, record) => {
                    return (
                        <div>
                            <Button type={"primary"} size={"small"}>修改</Button>
                            &nbsp;
                            <Button type={"danger"} size={"small"}>删除</Button>
                        </div>
                    )
                }
            },
        ],
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
        loading: true
    };

    handleProvinceChange = value => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    };

    onSecondCityChange = value => {
        this.setState({
            secondCity: value,
        });
    };

    handleChange = () => {

    };

    componentDidMount() {
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
        const {cities, columns, data, loading} = this.state;
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
                        <div className="table">
                            <Table
                                rowSelection={rowSelection}
                                columns={columns}
                                loading={loading}
                                dataSource={data}/>
                        </div>
                    </TabPane>
                </Tabs>,
            </div>
        )
    }
}