// IMPORTS
import Gallery from 'components/03-organisms/gallery/gallery';
import Cta from 'components/03-organisms/cta/cta';
import Footer from 'components/03-organisms/footer/footer';
import Jumper from 'components/03-organisms/jumper/jumper';
import { fetchProject } from 'queries';

// GENERATE METADATA
const generateMetadata = async ({ params }) => {

	// FETCH PROJECT
	const project = await fetchProject({ id: params.id });

	// RETURN METADATA
	return {
		key: `${ project?.attributes.heading }` || 'Samira Haas',
		title: `${ project?.attributes.heading } | Samira Haas` || 'Samira Haas',
		description: project?.attributes.description || 'Fotografie und Gestaltung für Grossfirmen, KMU oder Private in der ganzen Schweiz. Persönlich, authentisch und professionell. Jetzt anfragen.',
	};

};

// COMPONENT
const Component = async ({ params }) => {

	// FETCH PROJECT
	const project = await fetchProject({ id: params.id });

	// RENDER
	return (
		<>
			<Gallery data={ project } />
			<Cta />
			<Jumper />
			<Footer />
		</>
	);

};

// EXPORTS
export { generateMetadata };
export default Component;
