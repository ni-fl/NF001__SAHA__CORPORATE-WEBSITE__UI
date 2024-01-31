// IMPORTS
import ReactMarkdown from 'react-markdown';

// COMPONENT
const Component = ({ className = '', children = null, modifier = null, size = null }) => {

	// RENDER
	return (
		<ReactMarkdown className={ ` ${ className } markdown ${ modifier ? `markdown--${ modifier }` : '' } ${ size ? `markdown--${ size }` : '' } ` }>
			{ children }
		</ReactMarkdown>
	);

};

// EXPORTS
export default Component;
