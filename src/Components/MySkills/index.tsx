
import react  from "../../assets/react.svg";
import styles from "./style.module.scss";
export type Skill = {
	title: string
	imgSrc: string
	titleColor?: string
}
interface IMySkillsProps {
	skills: Skill[]
	title: string;
}
export function MySkills({skills, title} : IMySkillsProps) {
	return (
		<section className={`${styles.container}`}>
			<div className={styles.skills}>
				<h1>{title}</h1>
        
				<div className={styles.boxContainer}>
					{skills.map(({imgSrc,title,titleColor}, index) => {
						return (
							<div key={index} className={styles.skillBox} style={titleColor ?{boxShadow: `0px 0px 10px 2px ${titleColor}`} : {}}>
								<img loading="lazy" src = {imgSrc} />
								<h1 className="technology-title" style={{color: titleColor ? titleColor : "white"}}>{title}</h1>
							</div>
						);
					})}

				</div>
	
			</div>
			
      
		</section>
    

	);
}