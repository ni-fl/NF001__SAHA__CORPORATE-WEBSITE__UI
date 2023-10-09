import axios from 'axios';

const fetchHero = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/hero?populate=deep`);
	return response;
};

export default fetchHero;
