// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
import { fetchWedding } from 'queries';

const metadata = {
	title: 'Hochzeiten | Samira Haas',
	description: 'Lorem Ipsum',
};
// COMPONENT
const Component = async () => {

	// FETCH WEDDING
	const wedding = await fetchWedding();

	// RENDER
	return (
		<>
			<Showcase data={ wedding } />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
