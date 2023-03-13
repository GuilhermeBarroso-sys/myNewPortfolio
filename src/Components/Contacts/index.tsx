import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {AiFillPhone} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import {MdAlternateEmail} from "react-icons/md";
import styles from "./style.module.scss";
interface IContactsProps {
	contacts: {
		location: string;
		resume: string;
		resumeUrl: string
	}
}
export function Contacts({contacts : {location, resume, resumeUrl}} : IContactsProps) {
	return (
		<section>
			<nav className={styles.contacts}>
				<ul>
					<li><ImLocation /> {location}  </li>
					<li><AiFillPhone /> +55 (24) 99936-7444 </li>
					<li><MdAlternateEmail /> guibarrosodeoliveira5@gmail.com</li>
					<li>
						<a download href="" rel="noreferrer"> <AiOutlineMail /> </a>
						<a download  href={resumeUrl} rel="noreferrer">{resume}</a>    
					</li> 
				</ul>
			</nav>
			<div className={styles.icons}>
				<a href = {"https://www.linkedin.com/in/guilherme-barroso-oliveira/"} target="_blank" rel="noreferrer"> <BsLinkedin color="#0e76a8"  size={"2rem"} /></a>
				<a href = {"https://github.com/GuilhermeBarroso-sys"} target="_blank" rel="noreferrer"><BsGithub  size={"2rem"} color="#fff" />  </a>
			</div>
			
		</section>
	);
}