import axios from 'axios';

const fetchCorporate = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/corporate?populate=deep`);
	return response;
};

export default fetchCorporate;
