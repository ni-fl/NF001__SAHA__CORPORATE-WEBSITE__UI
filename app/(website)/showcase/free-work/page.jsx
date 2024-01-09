// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
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
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
