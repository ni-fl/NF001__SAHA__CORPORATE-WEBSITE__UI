import axios from 'axios';

const fetchDesign = async () => {
	const response = await axios.get(`${ process.env.NEXT_PUBLIC_STRAPI_URI }/api/design?populate=deep`);
	return response;
};

export default fetchDesign;
