// import {GithubOutlined} from '@ant-design/icons'
import {Space} from 'antd'
import "./index.css"
import { linkedinSvgIcon , gitHubSvgIcon} from '../../assets/svg/icon'

export default function Footer(){
    let year = new Date().getFullYear()
    return(
        <footer>
            <div className="container">
            <Space direction="horizontal" size={700}>
            <div className="footerc"><p>Copyright ©️ {year}. All rights reserved</p></div>
            <div className="socials"><a href="https://www.linkedin.com/in/bunmi-lawal-dev/">{linkedinSvgIcon}</a> 
            <a href='https://github.com/bunmi-lawal'>{gitHubSvgIcon}</a></div></Space>
            </div>
        </footer>
    )
}
