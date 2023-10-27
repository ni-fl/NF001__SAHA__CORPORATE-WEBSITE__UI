// FETCH BEHIND-THE-SCENE
const fetchBehindTheScene = async () => {
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/behind-the-scene?populate=deep`, {
		next: { revalidate: 300 },
		method: 'GET',
	});
	const { data } = await res.json();
	return data;
};

// EXPORTS
export default fetchBehindTheScene;
