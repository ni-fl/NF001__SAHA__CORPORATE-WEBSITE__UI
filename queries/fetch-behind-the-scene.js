import axios from 'axios';

const fetchBehindTheScene = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/behind-the-scene?populate=deep`);
	return response;
};

export default fetchBehindTheScene;
