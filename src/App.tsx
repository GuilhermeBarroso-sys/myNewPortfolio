import react from "./assets/react.svg";
import { Header } from "./Components/Header";
import { MySkills, Skill } from "./Components/MySkills";
import "./global/scss/style.scss";
import { Projects } from "./Components/Projects";
import { useEffect, useState } from "react";
import { IProjectPage, languages } from "./languages";
export function App() {
	const availableLanguages = [
		"ptBR",

		"enUS"
	];
	function handleLanguage()  {
		const savedLanguage = localStorage.getItem("@devguiPortfolio:language");
		if(language) {



			const isValidLanguage = availableLanguages.includes(savedLanguage);
			setLanguage(isValidLanguage ? savedLanguage : "ptBR");
		} else {
			setLanguage("ptBR");
		}
	}    
	function handleLanguageQueryParams(queryParams : string) {
		const isValidQueryParams = queryParams.includes("language");
		if(isValidQueryParams) {
			const savedLanguage = queryParams.replace("language=", "");
			const isValidLanguage  = availableLanguages.includes(savedLanguage);
			isValidLanguage ? setLanguage(savedLanguage) : setLanguage("ptBR");
		}
	}
	const [language, setLanguage] = useState<string|null>("ptBR");
	useEffect(() => {
		const [, queryParams] = window.location.href.split("?");
		!queryParams ? handleLanguage() : handleLanguageQueryParams(queryParams);
	}, []);
	const skills : Skill []= [
		{
			title: "Javascript",
			imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			titleColor: "#F0DB4F"
		},
		{
			title: "Typescript",
			imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
			titleColor: "#007acc"
		},
		{
			title: "Node.js",
			imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
			titleColor: "#83CD29"

		},
		{
			title: "React.js",
			imgSrc: react,
			titleColor: "#61DAFB"

		},
	];
	const {aboutMe, role} = languages[language].header;
	const {projects, title, previewTitle} : IProjectPage = languages[language].projects ; 
	const {contacts} = languages[language];
	const skillTitle = languages[language].skills.title;
	return (
		<>
			<Header 
				aboutMe={aboutMe} 
				contacts={contacts} 
				role={role}
				languageValue = {language}
				onChangeLanguage={(event, language) => {
					event.preventDefault();
					setLanguage(language);
					localStorage.setItem("@devguiPortfolio:language", language);

				}}
			/>
			<MySkills skills={skills} title={skillTitle}  />
			<Projects projects={projects} title={title} previewTitle={previewTitle} />
		</>

	);
}


