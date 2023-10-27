// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
import { fetchStorytelling } from 'queries';

// METADATA
const metadata = {
	title: 'Storytelling | Samira Haas',
	description: 'Lorem Ipsum',
};

// COMPONENT
const Component = async () => {

	// FETCH STORYTELLING
	const storytelling = await fetchStorytelling();

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
