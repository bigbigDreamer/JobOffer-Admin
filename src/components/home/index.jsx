import React,{Component} from "react"
import { Button } from "antd"

export default class Home extends Component{
    render() {
        return (
            <div>
                Hello World
                <Button type={"primary"}>点我</Button>
            </div>
        )
    }
}