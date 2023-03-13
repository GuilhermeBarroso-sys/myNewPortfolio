import { ReactNode } from "react";
import styles from "./style.module.scss";
import {AiFillGithub} from "react-icons/ai";
import {MdOutlinePreview} from "react-icons/md";
export type Project = {
	name: string
	logo: string
	year: string;
	description: ReactNode
	githubUrl: string
	previewUrl?: string
}
interface IProjectsProps {
	title : string
	previewTitle: string;
	projects : Project[]
	oddColor?: string;
	evenColor?: string;
}

export function Projects({title, evenColor,oddColor,projects, previewTitle} : IProjectsProps) {
	return (
		<main className={styles.mainContainer}>
			<div className={styles.title}>
				<h1>{title} ✨</h1>
			</div>
			<section className={styles.projectsContainer}>
				{projects.map((project, index) => {
					return (
						<div key={index} className={styles.projectBox}>
							<div className={styles.projectLogo}>
								<img src = {project.logo} />
							</div>
							<div className={styles.about}>
								<h2>{project.name}</h2>
								<h5>{project.year}</h5>
								<p>{project.description}</p>
								<div className={styles.githubLink}>
									<a href={project.githubUrl} target="_blank" className={styles.box} rel="noreferrer">
										<span>
											<AiFillGithub size={"1.7rem"}  />
										</span>
										<span>Github</span>
									</a>
									{project.previewUrl 
										? (<a href={project.previewUrl} target="_blank" className={styles.box} rel="noreferrer">
											<span>
												<MdOutlinePreview size={"1.7rem"}  />
											</span>
											<span>{previewTitle}</span>
										</a>)
										: (<a onClick={(e)=>{e.preventDefault();}} className={styles.box} rel="noreferrer" style={{
											filter: "brightness(0.6)",
											cursor: "not-allowed"
										}}>
											<span>
												<MdOutlinePreview size={"1.7rem"}  />
											</span>
											<span>{previewTitle}</span>
										</a>)
									}
								</div>
                
							</div>
						</div>
					);
				})}

			</section>
		</main>
	);
}