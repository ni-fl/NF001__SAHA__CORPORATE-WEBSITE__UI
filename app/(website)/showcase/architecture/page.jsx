// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
import Cta from 'components/03-organisms/cta/cta';
import Footer from 'components/03-organisms/footer/footer';
import Jumper from 'components/03-organisms/jumper/jumper';
import { fetchArchitecture } from 'queries';

// METADATA
const metadata = {
	title: 'Architektur | Samira Haas',
	description: 'Professionelle Architekturfotografie für Immobilien, Inneneinrichtungen oder Bauprojekte. Hochwertige Bilder für die Vermarktung Ihrer Objekte.',
};

// COMPONENT
const Component = async () => {

	// FETCH ARCHITECTURE
	const architecture = await fetchArchitecture();

	// RENDER
	return (
		<>
			<Showcase data={ architecture } />
			<Cta />
			<Jumper />
			<Footer />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
