import { coverImg } from "../../assets/img/cover-img"
import { gitHubSvgIcon, linkedinSvgIcon } from "../../assets/svg/icon"
import "./index.css"

export default function Home(){
return(
    <section id="home" className="cover">
    <div className="content">
<div className="cover-main">
    <div className="cover-text">
<h1>Front-End React Developer 👋</h1>
<p>Hi, I'm Bunmi Lawal. A passionate Front-end React developer based in Lagos, Nigeria. 📍</p>
<span>
<a href="https://www.linkedin.com/in/bunmi-lawal-dev/">{linkedinSvgIcon}</a> <a href='https://github.com/bunmi-lawal'>{gitHubSvgIcon}</a>
</span>
    </div>
    <div className="cover-img"><img src=""/> </div>
</div>
<div className="skills">
    <p>Tech Stack</p>
    <div className="logo">
        <ul style={{listStyleType:"none"}}><span>
        <li><img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon" /></li>
            <li><img src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon" /></li>
            <li><img src="https://skillicons.dev/icons?i=react,git" alt="skill-icon" /></li>
            <li><img src="https://skillicons.dev/icons?i=tailwind,vscode" alt="skill-icon" /></li>
        </span>
        </ul>
    </div>
</div>
    </div>
    </section>
    )
}