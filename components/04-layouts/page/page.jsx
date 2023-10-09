import PropTypes from 'prop-types';
import Head from 'components/01-atoms/head/head';
import Navigation from 'components/03-organisms/navigation/navigation';
import Jumper from 'components/03-organisms/jumper/jumper';
import Footer from 'components/03-organisms/footer/footer';
import Cta from 'components/03-organisms/cta/cta';
import Main from 'components/03-organisms/main/main';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import gsap from 'gsap';

const Page = ({ className, children, meta }) => {

	const router = useRouter();

	const handleRouteChangeStart = () => {
		gsap.to(['.main', '.cta', '.footer', '.jumper'], { opacity: 0, duration: 0.2 });
	};

	const handleRouteChangeEnd = () => {
		gsap.to(['.main', '.cta', '.footer', '.jumper'], { opacity: 1, duration: 0.2, delay: 0.2 });
	};

	useEffect(() => {
		router.events && router.events.on('routeChangeStart', handleRouteChangeStart);
		router.events && router.events.on('routeChangeComplete', handleRouteChangeEnd);
		return () => {
			router.events && router.events.off('routeChangeStart', handleRouteChangeStart);
			router.events && router.events.off('routeChangeComplete', handleRouteChangeEnd);
		};
	}, []);

	return (
		<div className={ `${ className } page` }>
			<Head meta={ meta } />
			<Navigation />
			<Main content={ children } />
			<Cta />
			<Jumper />
			<Footer />
		</div>
	);

};

Page.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	meta: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string,
	}),
};

Page.defaultProps = {
	className: '',
	meta: {
		title: 'Fotografie & Gestaltung',
		description: '',
		image: 'https://samirahaas-web-development.fra1.digitaloceanspaces.com/large_general_04_049cda56b7.webp',
	},
};

export default Page;
