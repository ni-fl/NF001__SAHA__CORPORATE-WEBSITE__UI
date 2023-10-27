// FETCH MY-ETHIC
const fetchMyEthic = async () => {
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/my-ethic?populate=deep`, {
		next: { revalidate: 300 },
		method: 'GET',
	});
	const { data } = await res.json();
	return data;
};

// EXPORTS
export default fetchMyEthic;
