import axios from 'axios';

const fetchStorytelling = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/storytelling?populate=deep`);
	return response;
};

export default fetchStorytelling;
