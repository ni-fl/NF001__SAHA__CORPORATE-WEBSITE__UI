// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
import { fetchFreeWork } from 'queries';

// METADATA
const metadata = {
	title: 'Freie Arbeiten | Samira Haas',
	description: 'Lorem Ipsum',
};

// COMPONENT
const Component = async () => {

	// FETCH STORYTELLING
	const storytelling = await fetchFreeWork();

	// RENDER
	return (
		<>
			<Showcase data={ storytelling } />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
