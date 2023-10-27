// FETCH DATA-PRIVACY
const fetchDataPrivacy = async () => {
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/data-privacy?populate=deep`, {
		next: { revalidate: 300 },
		method: 'GET',
	});
	const { data } = await res.json();
	return data;
};

// EXPORTS
export default fetchDataPrivacy;
