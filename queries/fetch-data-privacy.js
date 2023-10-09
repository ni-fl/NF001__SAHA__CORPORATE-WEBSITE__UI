import axios from 'axios';

const fetchDataPrivacy = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/data-privacy?populate=deep`);
	return response;
};

export default fetchDataPrivacy;
