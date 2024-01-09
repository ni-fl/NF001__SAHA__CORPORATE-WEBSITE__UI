// IMPORTS
import LegalInformations from 'components/03-organisms/legal-informations/legal-informations';
import { fetchDataPrivacy } from 'queries';

// METADATA
const metadata = {
	title: 'Datenschutz | Samira Haas',
	description: 'Die auf dieser Website enthaltenen Inhalte sind urheberrechtlich geschützt. Die Inhalte dürfen nicht verändert und ohne schriftliche Genehmigung auf anderen Internetseiten oder vernetzten Rechnern genutzt werden.',
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
