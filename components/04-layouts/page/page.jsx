'use client';

// IMPORTS
import Navigation from 'components/03-organisms/navigation/navigation';
import Jumper from 'components/03-organisms/jumper/jumper';
import Footer from 'components/03-organisms/footer/footer';
import Cta from 'components/03-organisms/cta/cta';
import Main from 'components/03-organisms/main/main';

// COMPONENT
const Component = ({ children }) => {

	// RENDER
	return (
		<div className="page">
			<Navigation />
			<Main content={ children } />
		</div>
	);

};

// EXPORTS
export default Component;
