// IMPORTS
import Link from 'next/link';

// COMPONENT
const Component = ({ className = '', children = null, href = '#', onClick = null }) => {

	// RENDER
	return (
		<Link className={ ` ${ className } anchor` } href={ href } onClick={ onClick }>
			<span className="anchor__content">
				{ children }
			</span>
		</Link>
	);

};

// EXPORTS
export default Component;
