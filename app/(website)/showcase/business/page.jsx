// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
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
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
