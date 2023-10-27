// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
import { fetchArchitecture } from 'queries/index.js';

// METADATA
const metadata = {
	title: 'Architektur | Samira Haas',
	description: 'Lorem Ipsum',
};

// COMPONENT
const Component = async () => {

	// FETCH ARCHITECTURE
	const architecture = await fetchArchitecture();

	// RENDER
	return (
		<>
			<Showcase data={ architecture } />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
