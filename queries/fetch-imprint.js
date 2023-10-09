import axios from 'axios';

const fetchImprint = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/imprint?populate=deep`);
	return response;
};

export default fetchImprint;
