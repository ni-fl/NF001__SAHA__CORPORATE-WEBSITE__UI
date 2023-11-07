// IMPORTS
import Link from 'next/link';

// COMPONENT
const Component = ({ className = '', children = null, href = '#', onClick = null }) => {

	// RENDER
	return (
		<a className={ ` ${ className } anchor` } href={ href } onClick={ onClick }>
			<span className="anchor__content">
				{ children }
			</span>
		</a>
	);

};

// EXPORTS
export default Component;
