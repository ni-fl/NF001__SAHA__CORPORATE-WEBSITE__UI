// import axios from 'axios';

// const fetchTeaser = async () => {
// 	const response = await axios.get(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/teaser?populate=deep`);
// 	return response;
// };

// export default fetchTeaser;

// FETCH TEASER
const fetchTeaser = async () => {
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/teaser?populate=deep`, {
		next: { revalidate: 300 },
		method: 'GET',
	});
	const { data } = await res.json();
	return data;
};

// EXPORTS
export default fetchTeaser;
