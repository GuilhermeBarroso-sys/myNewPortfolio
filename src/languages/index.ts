import finances from "../assets/finances.svg";
import blogIcon from "../assets/ninja.png";
import movies from "../assets/movies.png";
import todo from "../assets/todo.png";
import leadGeneration from "../assets/lead-generation.png";
import { Project } from "../Components/Projects";
import resumeEnUs from "../assets/resume_enUS.pdf";
import resumePtBr from "../assets/resume_ptBR.pdf";

export interface IProjectPage {
	title: string
	previewTitle: string;
	projects :Project[],
}
interface ILanguage {
	[key : string] : {
		contacts: {
			location: string;
			resume: string;
			resumeUrl: string
		}
		header: {
			aboutMe: string
			role: string
		},
		skills: {
			title: string
		}
		projects: IProjectPage
	}
}

export const languages : ILanguage = {
	ptBR: {
		skills: {
			title: "Minha Stack"
		},
		contacts: {
			location: "Rio de Janeiro - Brasil",
			resume: "Currículo - BR (Clique para download)",
			resumeUrl: resumePtBr
		},
		header : {
			role: "Desenvolvedor",
			aboutMe: `Oi! Meu nome é Guilherme, sou um programador apaixonado por desenvolvimento web.
      Estou sempre empenhado em crescer continuamente e expandir meus conhecimentos nesta área, assumindo desafios e aprendendo com eles.`
		},
		projects :  {
			title: "Meus principais projetos",
			previewTitle: "Visualizar",
			projects : [
				{
					name: "Leads Project",
					description: "Projeto de captação de Lead que envia mensagem no Telegram.",
					githubUrl: "https://github.com/GuilhermeBarroso-sys/LeadsProject",
					logo: leadGeneration,
					year: "2023",
					previewUrl: null
				},
				{
					name: "BEFinances",
					description: "Projeto financeiro que ajuda você controlar seus gastos.",
					githubUrl: "https://github.com/GuilhermeBarroso-sys/BEFinances-server",
					logo: finances,
					year: "2023",
					previewUrl: "https://befinances-web.vercel.app/"
				},
				{
					name: "Todo list",
					description: "Uma todo list simples para organizar suas tarefas do dia a dia.",
					githubUrl: "https://github.com/GuilhermeBarroso-sys/todolist-react-ts",
					logo: todo,
					year: "2022",
					previewUrl: "https://todolist-react-ts.vercel.app/"
				},
				{
					name: "TMDB project",
					description: "Projeto para ver quais são os filmes populares no momento.",
					githubUrl: "https://github.com/GuilhermeBarroso-sys/TMDB-Desafio-Front-end",
					logo: movies,
					year: "2022"
				},
				{
					name: "NinjaPress",
					description: "Pequeno blog com painel administrativo.",
					githubUrl: "https://github.com/GuilhermeBarroso-sys/Front-End-Blog",
					logo: blogIcon,
					year: "2021"
				},
			]
		}
	},
	enUS: {
		skills: {
			title: "My Stack"
		},
		contacts: {
			location: "Rio de Janeiro - Brazil",
			resume: "Resume - US (Click to download)",
			resumeUrl: resumeEnUs
		},
		header : {
			role: "Software Enginner",
			aboutMe: `Hi! I'm Guilherme, a Software engineer with a passion for web development. 
      I'm always committed to continuously growing and expanding my knowledge in this area, taking challenges, and learning from them.`
		},
		projects :  {
			title: "My Favorite projects",
			previewTitle: "Preview",
			projects : [
				{
					name: "Leads Project",
					description: "Catch leads and send messages to a Telegram chat group.",
					githubUrl: "https://github.com/GuilhermeBarroso-sys/LeadsProject",
					logo: leadGeneration,
					year: "2023",
					previewUrl: null
				},
				{
					name: "BEFinances",
					description: "A financial project that helps control your expenses!",
					githubUrl: "https://github.com/GuilhermeBarroso-sys/BEFinances-server",
					logo: finances,
					year: "2023",
					previewUrl: "https://befinances-web.vercel.app/"
				},
				{
					name: "Todo list",
					description: "A simple todolist to check your tasks!",
					githubUrl: "https://github.com/GuilhermeBarroso-sys/todolist-react-ts",
					logo: todo,
					year: "2022",
					previewUrl: "https://todolist-react-ts.vercel.app/"
				},
				{
					name: "TMDB project",
					description: "See which movie is in trending.",
					githubUrl: "https://github.com/GuilhermeBarroso-sys/TMDB-Desafio-Front-end",
					logo: movies,
					year: "2022"
				},
				{
					name: "NinjaPress",
					description: "A small blog that has an admin panel.",
					githubUrl: "https://github.com/GuilhermeBarroso-sys/Front-End-Blog",
					logo: blogIcon,
					year: "2021"
				},
			]
		}
	}

};