// FETCH IMPRINT
const fetchImprint = async () => {
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/imprint?populate=deep`, {
		next: { revalidate: 300 },
		method: 'GET',
	});
	const { data } = await res.json();
	return data;
};

// EXPORTS
export default fetchImprint;
