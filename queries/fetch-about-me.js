import axios from 'axios';

const fetchAboutMe = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/about-me?populate=deep`);
	return response;
};

export default fetchAboutMe;
