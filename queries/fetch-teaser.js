import axios from 'axios';

const fetchTeaser = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/teaser?populate=deep`);
	return response;
};

export default fetchTeaser;
