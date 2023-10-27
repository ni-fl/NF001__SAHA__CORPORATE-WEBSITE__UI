// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
import { fetchDesign } from 'queries';

// METADATA
const metadata = {
	title: 'Design | Samira Haas',
	description: 'Lorem Ipsum',
};

// COMPONENT
const Component = async () => {

	// FETCH DESIGN
	const design = await fetchDesign();

	// RENDER
	return (
		<>
			<Showcase data={ design } />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
