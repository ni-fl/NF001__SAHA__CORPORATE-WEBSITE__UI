// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
import Cta from 'components/03-organisms/cta/cta';
import Footer from 'components/03-organisms/footer/footer';
import Jumper from 'components/03-organisms/jumper/jumper';
import { fetchBusiness } from 'queries';

// METADATA
const metadata = {
	title: 'Business | Samira Haas',
	description: 'Professionelle Fotografin für Ihr Business. Egal ob Mitarbeiterfotos, Firmenbilder oder Events. Modern und authentisch. Jetzt unverbindlich anfragen!',
};
// COMPONENT
const Component = async () => {

	// FETCH CORPORATE
	const corporate = await fetchBusiness();

	// RENDER
	return (
		<>
			<Showcase data={ corporate } />
			<Cta />
			<Jumper />
			<Footer />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
