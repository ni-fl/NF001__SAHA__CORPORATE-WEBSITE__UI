import axios from 'axios';

const fetchSayHello = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/say-hello?populate=deep`);
	return response;
};

export default fetchSayHello;
