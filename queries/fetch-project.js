import axios from 'axios';

const fetchProject = async (id) => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/projects/${ id }?populate=deep`);
	return response;
};

export default fetchProject;
