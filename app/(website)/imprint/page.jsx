// IMPORTS
import Publication from 'components/03-organisms/publication/publication';
import fetchImprint from 'queries/fetch-imprint';

// METADATA
const metadata = {
	title: 'Impressum | Samira Haas',
	description: 'Lorem Ipsum',
};

// COMPONENT
const Component = async () => {

	// FETCH IMPRINT
	const imprint = await fetchImprint();

	// RENDER
	return (
		<>
			<Publication data={ imprint } />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
