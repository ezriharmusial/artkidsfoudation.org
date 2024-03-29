
const getRoutes = (locale: string) => {
	const en_modules = Object.entries(import.meta.globEager(`./routes/projects/**/*.en.md`));
	const nl_modules = Object.entries(import.meta.globEager(`./routes/projects/**/*.nl.md`));
	let modules = !locale || locale == 'en' ? en_modules : nl_modules

	return modules.map(([file, module]) => {
		const path = file
			.replace("./routes/", "/")
			.replace("index", "")
			.replace(".md", "");

		// console.log(
		// 	'module.metadata', module.metadata
		// )

		return {
			path,
			...module.metadata,
		};
	});
};

const getProjects = (locale: string) => {
	const en_modules = Object.entries(import.meta.globEager(`./routes/projects/**/*.en.md`));
	const nl_modules = Object.entries(import.meta.globEager(`./routes/projects/**/*.nl.md`));
	let modules = !locale || locale == 'en' ? en_modules : nl_modules

	return modules.map(([file, module]) => {
		const path = file
			.replace("./routes/", "/")
			.replace("index", "")
			.replace(".md", "");

		// console.log(
		// 	'module.metadata', module.metadata
		// )

		return {
			path,
			...module.metadata,
		};
	});
};

export { getRoutes, getProjects };