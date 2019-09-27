import React, {Component} from "react"
import {Menu, Icon} from 'antd';
import "./sider_nav.less"
import {Link,Router} from "react-router-dom"
import logo from "../../assets/img/logo.png"


export default class SiderNav extends Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    handleChangeMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        // const {history} = this.props;
        console.log(this.props);

    };

    render() {
        return (
            <div>
                <div className="logo">
                    <img src={logo} alt="" style={{width: "117px", height: "25px"}}/>
                </div>
                <div style={{width: 240}} className={"sider_nav"}>
                    {/*<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>*/}
                    {/*    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />*/}
                    {/*</Button>*/}
                    <Menu
                        defaultSelectedKeys={['home']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                        onSelect={this.handleChangeMenu}
                    >
                        <Menu.Item key="home" className={"menu_item"}>
                            <Link to={"/"}>
                            <Icon type="home"/>
                            <span>首页</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="business" className={"menu_item"}>
                            <Link to={"/business"}>
                            <Icon type="copyright"/>
                            <span>商家管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" className={"menu_item"}>
                            <Icon type="profile"/>
                            <span>招聘管理</span>
                        </Menu.Item>
                        <Menu.Item key="4" className={"menu_item"}>
                            <Icon type="user"/>
                            <span>用户管理</span>
                        </Menu.Item>
                        <Menu.Item key="5" className={"menu_item"}>
                            <Icon type="appstore"/>
                            <span>模块管理</span>
                        </Menu.Item>
                        <Menu.Item key="6" className={"menu_item"}>
                            <Icon type="message"/>
                            <span>客服管理</span>
                        </Menu.Item>
                        <Menu.Item key="7" className={"menu_item"}>
                            <Icon type="tool"/>
                            <span>权限管理</span>
                        </Menu.Item>
                        <Menu.Item key="8" className={"menu_item"}>
                            <Icon type="file-search"/>
                            <span>求职管理</span>
                        </Menu.Item>
                        <Menu.Item key="9" className={"menu_item"}>
                            <Icon type="filter"/>
                            <span>审核管理</span>
                        </Menu.Item>
                        <Menu.Item key="10" className={"menu_item"}>
                            <Icon type="setting"/>
                            <span>APP管理</span>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}