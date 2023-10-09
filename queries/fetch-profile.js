import axios from 'axios';

const fetchProfile = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/profile?populate=deep`);
	return response;
};

export default fetchProfile;
