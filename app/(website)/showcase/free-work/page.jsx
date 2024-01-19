// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
import Cta from 'components/03-organisms/cta/cta';
import Footer from 'components/03-organisms/footer/footer';
import Jumper from 'components/03-organisms/jumper/jumper';
import { fetchFreeWork } from 'queries';

// METADATA
const metadata = {
	title: 'Freie Arbeiten | Samira Haas',
	description: 'Fotografin und Künstlerin aus Luzern. Ihre Leidenschaft für Fotografie entstand aus dem Wunsch, Emotionen und Geschichten durch Bilder auszudrücken.',
};

// COMPONENT
const Component = async () => {

	// FETCH STORYTELLING
	const storytelling = await fetchFreeWork();

	// RENDER
	return (
		<>
			<Showcase data={ storytelling } />
			<Cta />
			<Jumper />
			<Footer />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
