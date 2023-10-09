import axios from 'axios';

const fetchMyEthic = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/my-ethic?populate=deep`);
	return response;
};

export default fetchMyEthic;
