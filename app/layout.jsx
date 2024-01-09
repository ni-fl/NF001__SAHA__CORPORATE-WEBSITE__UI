// IMPORTS
import 'styles/main.scss';

// META DATA
const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_UI_URI),
	title: 'Samira Haas',
	description: 'Ich bin Samira aus Luzern. Fotografin und Gestalterin. Mit einem Auge für Ästhetik und Liebe zum Detail erschaffe ich einzigartige visuelle Projekte.',
	viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
	openGraph: {
		title: 'Samira Haas',
		description: 'Ich bin Samira aus Luzern. Fotografin und Gestalterin. Mit einem Auge für Ästhetik und Liebe zum Detail erschaffe ich einzigartige visuelle Projekte.',
		url: 'https://samirahaas.ch',
		siteName: 'Samira Haas',
		images: [{ url: 'https://nf001-saha-website-space-pro.fra1.cdn.digitaloceanspaces.com/general_02_639d0d3ae0.webp', width: 600, height: 800 }],
		locale: 'de-ch',
		type: 'website',
	},
};

// COMPONENT
const Component = ({ children }) => {

	// RENDER
	return (
		<html lang="de">
			<body>
				{ children }
			</body>
		</html>
	);

};

// EXPORTS
export { metadata };
export default Component;
