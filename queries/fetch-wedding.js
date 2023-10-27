// FETCH WEDDING
const fetchWedding = async () => {
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/wedding?populate=deep`, {
		next: { revalidate: 300 },
		method: 'GET',
	});
	const { data } = await res.json();
	return data;
};

// EXPORTS
export default fetchWedding;
