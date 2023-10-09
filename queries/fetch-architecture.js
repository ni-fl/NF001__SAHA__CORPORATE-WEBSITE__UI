import axios from 'axios';

const fetchArchitecture = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/architecture?populate=deep`);
	return response;
};

export default fetchArchitecture;
