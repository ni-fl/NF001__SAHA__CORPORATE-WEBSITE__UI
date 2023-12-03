// FETCH FREE WORK
const fetchFreeWork = async () => {
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/free-work?populate=deep`, {
		next: { revalidate: 300 },
		method: 'GET',
	});
	const { data } = await res.json();
	return data;
};

// EXPORTS
export default fetchFreeWork;
