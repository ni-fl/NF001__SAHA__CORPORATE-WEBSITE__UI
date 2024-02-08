'use client';

// IMPORTS
import Navigation from 'components/03-organisms/navigation/navigation';
import Main from 'components/03-organisms/main/main';
import PlausibleProvider from 'next-plausible';


// COMPONENT
const Component = ({ className = '', children = null }) => {

	// RENDER
	return (
		<PlausibleProvider domain="samirahaas.ch">
			<div className={`${ className } page`}>
				<Navigation />
				<Main content={ children } />
			</div>
		</PlausibleProvider>
	);

};

// EXPORTS
export default Component;
