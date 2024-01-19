// IMPORTS
import Publication from 'components/03-organisms/publication/publication';
import fetchImprint from 'queries/fetch-imprint';
import Cta from 'components/03-organisms/cta/cta';
import Footer from 'components/03-organisms/footer/footer';
import Jumper from 'components/03-organisms/jumper/jumper';

// METADATA
const metadata = {
	title: 'Impressum | Samira Haas',
	description: 'Verantwortlich für den Inhalt: Samira Haas | Web Development: haas web solutions',
};

// COMPONENT
const Component = async () => {

	// FETCH IMPRINT
	const imprint = await fetchImprint();

	// RENDER
	return (
		<>
			<Publication data={ imprint } />
			<Cta />
			<Jumper />
			<Footer />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
