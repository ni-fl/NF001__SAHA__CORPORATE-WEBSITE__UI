// IMPORTS
import Showcase from 'components/03-organisms/showcase/showcase';
import Cta from 'components/03-organisms/cta/cta';
import Footer from 'components/03-organisms/footer/footer';
import Jumper from 'components/03-organisms/jumper/jumper';
import { fetchWedding } from 'queries';

const metadata = {
	title: 'Hochzeiten | Samira Haas',
	description: 'Hey, ich bin Samira aus Luzern. Professionelle Hochzeitsfotografin für natürliche und authentische Hochzeitsbilder. Jetzt unverbindlich anfragen.',
};
// COMPONENT
const Component = async () => {

	// FETCH WEDDING
	const wedding = await fetchWedding();

	// RENDER
	return (
		<>
			<Showcase data={ wedding } />
			<Cta />
			<Jumper />
			<Footer />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
