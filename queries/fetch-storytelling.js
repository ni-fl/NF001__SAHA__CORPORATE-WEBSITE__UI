// FETCH STORYTELLING
const fetchStorytelling = async () => {
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/storytelling?populate=deep`, {
		next: { revalidate: 300 },
		method: 'GET',
	});
	const { data } = await res.json();
	return data;
};

// EXPORTS
export default fetchStorytelling;
