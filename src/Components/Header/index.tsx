import styles from "./style.module.scss";
import myselfPhoto from "../../assets/me.jpg";
import { Contacts } from "../Contacts";
interface IHeaderProps {
	aboutMe: string
	role: string;
	contacts: {
		location: string;
		resume: string,
		resumeUrl: string
	}
	languageValue: string;
	onChangeLanguage: (event : React.MouseEvent<HTMLButtonElement, MouseEvent> ,languageValue : string) => void
}
const availableLanguages = [
	{
		title: "Português",
		value: "ptBR"
	},
	{
		title: "English",
		value: "enUS"
	}
];
export function Header({aboutMe, contacts, role, languageValue, onChangeLanguage} : IHeaderProps) {
	return (
		<header className={`w-100 bg-dark ${styles.bgDeveloper} ${styles.headerContainer}`}>
			<div className={styles.container}>
				<div className={styles.language}>
					{availableLanguages.map(({title, value}) => {
						return (
							<div key={value}> 
								<button 
									style={{
										backgroundColor: value === languageValue ? "#5bc0de" : "#262626" 
									}} 
									onClick={(e) => {
										onChangeLanguage(e, value);
									}}>{title}</button>
							</div>
						);
					})}
				</div>
				<div className={styles.introduction}>
					<div className={styles.myselfPhoto}>
						<img src = {myselfPhoto} loading="lazy" />

					</div>
					<h1>Guilherme Barroso</h1>
					<h3>{role}</h3>
					<div className={styles.introductionText}>
            
						<p>
							{aboutMe}
						</p>
					</div>
					<Contacts contacts = {contacts}/>
				</div>
			</div>
		</header>

	);
}