// IMPORTS
import NextHead from 'next/head';

// COMPONENT
const Head = ({ meta }) => {

	// RENDER
	return (
		<NextHead>
			<title>{`${ meta?.title } | Samira Haas`}</title>
			<meta name="description" content={ meta?.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus facere repellat voluptatem natus doloremque a tenetur, numquam eligendi nulla velit inventore necessitatibus molestias dicta officia, eos autem corrupti asperiores possimus.' } />
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			<meta property="og:title" content={ meta?.title } />
			<meta property="og:description" content={ meta?.description } />
			<meta property="og:image" content={ meta?.image } />
			<meta property="og:image:width" content="1920" />
			<meta property="og:image:height" content="1080" />
			<meta property="og:image:alt" content={ meta?.description } />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:type" content="image/png" />
			<meta property="og:url" content="samirahaas.ch" />
			<meta property="og:site_name" content={ meta?.title } />
		</NextHead>
	);

};

// EXPORTS
export default Head;
