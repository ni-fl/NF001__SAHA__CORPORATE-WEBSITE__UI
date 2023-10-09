import axios from 'axios';

const fetchWedding = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/wedding?populate=deep`);
	return response;
};

export default fetchWedding;
