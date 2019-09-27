import React, {Component} from "react"
import {Tabs} from 'antd';
import {Select} from 'antd';
import "./business.less"

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

    render() {
        const {cities} = this.state;
        return (
            <div className="business">
                <Tabs
                    style={{boxShadow: '0 0 8px #ededed', height: '100%',padding:"0 18px"}}
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
                    </TabPane>
                </Tabs>,
            </div>
        )
    }
}