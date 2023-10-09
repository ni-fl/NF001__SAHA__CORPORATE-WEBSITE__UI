import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Text from 'components/01-atoms/text/text';
import Link from 'next/link';

const Error = () => {

	return (
		<Section className="error">
			<div className="error__content content">
				<Heading className="content__heading" level="h1">OOPS!</Heading>
				<Text className="content__text text--large">Die Seite konnte leider nicht gefunden werden.</Text>
			</div>
			<Link className="error__link link" href="/">
				<Text className="link__text">Zurück zur Startseite</Text>
			</Link>
		</Section>
	);

};

export default Error;
