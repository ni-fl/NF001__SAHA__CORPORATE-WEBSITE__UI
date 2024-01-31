'use client';

// IMPORTS
import Navigation from 'components/03-organisms/navigation/navigation';
import Main from 'components/03-organisms/main/main';

// COMPONENT
const Component = ({ className = '', children = null }) => {

	// RENDER
	return (
		<div className={`${ className } page`}>
			<Navigation />
			<Main content={ children } />
		</div>
	);

};

// EXPORTS
export default Component;
