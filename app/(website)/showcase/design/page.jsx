// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
import { fetchDesign } from 'queries';

// METADATA
const metadata = {
	title: 'Design | Samira Haas',
	description: 'Hi, ich bin Samira, ausgebildete Gestalterin aus Luzern. Ich kreiere deinen visuellen Markenauftritt – vom Logo über Broschüren bis hin zur Website.',
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
