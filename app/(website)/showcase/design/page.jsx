// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
import Cta from 'components/03-organisms/cta/cta';
import Footer from 'components/03-organisms/footer/footer';
import Jumper from 'components/03-organisms/jumper/jumper';
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
			<Cta />
			<Jumper />
			<Footer />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
