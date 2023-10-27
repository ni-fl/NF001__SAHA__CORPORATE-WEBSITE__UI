// FETCH PROJECT
const fetchProject = async ({ id }) => {
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/projects/${ id }?populate=deep`, {
		next: { revalidate: 300 },
		method: 'GET',
	});
	const { data } = await res.json();
	return data;
};

// EXPORTS
export default fetchProject;
