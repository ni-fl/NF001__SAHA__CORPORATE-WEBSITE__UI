import PropTypes from 'prop-types';
import Head from 'components/01-atoms/head/head';

const BlankPage = ({ className, children, meta }) => {

	return (
		<div className={ `${ className } blank-page` }>
			<Head meta={ meta } />
			{ children }
		</div>
	);

};

BlankPage.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	meta: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string,
	}),
};

BlankPage.defaultProps = {
	className: '',
	meta: {
		title: 'Fotografie & Gestaltung',
		description: '',
		image: 'https://samirahaas-web-development.fra1.digitaloceanspaces.com/large_general_04_049cda56b7.webp',
	},
};

export default BlankPage;
