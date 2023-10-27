// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
import { fetchCorporate } from 'queries';

// METADATA
const metadata = {
	title: 'Corporate | Samira Haas',
	description: 'Lorem Ipsum',
};
// COMPONENT
const Component = async () => {

	// FETCH CORPORATE
	const corporate = await fetchCorporate();

	// RENDER
	return (
		<>
			<Showcase data={ corporate } />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
