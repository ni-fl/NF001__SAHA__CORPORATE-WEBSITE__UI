// IMPORTS
import LegalInformations from 'components/03-organisms/legal-informations/legal-informations';
import { fetchDataPrivacy } from 'queries';

// METADATA
const metadata = {
	title: 'Datenschutz | Samira Haas',
	description: 'Lorem Ipsum',
};

// COMPONENT
const Component = async () => {

	// FETCH DATA PRIVACY
	const dataPrivacy = await fetchDataPrivacy();

	// RENDER
	return (
		<>
			<LegalInformations data={ dataPrivacy } />
		</>
	);

};

// EXPORTS
export { metadata };
export default Component;
