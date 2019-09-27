import React from "react"
import { Result, Button } from 'antd';

export default function NotFound({history}) {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={()=> {
                    console.log(history);
                    history.push({pathname:"/"})
                }}>Back Home</Button>}
            />
        </div>
    )
}