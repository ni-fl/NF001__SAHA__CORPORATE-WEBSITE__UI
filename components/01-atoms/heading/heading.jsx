import PropTypes from 'prop-types';

const Heading = ({ className, children, level, lookLike }) => {

	switch (level) {
	case 'h1': return <h1 className={ ` ${ className } heading heading--${ lookLike || level }` }>{ children }</h1>;
	case 'h2': return <h2 className={ ` ${ className } heading heading--${ lookLike || level }` }>{ children }</h2>;
	case 'h3': return <h3 className={ ` ${ className } heading heading--${ lookLike || level }` }>{ children }</h3>;
	case 'h4': return <h4 className={ ` ${ className } heading heading--${ lookLike || level }` }>{ children }</h4>;
	case 'h5': return <h5 className={ ` ${ className } heading heading--${ lookLike || level }` }>{ children }</h5>;
	default: return <h1 className={ ` ${ className } heading heading--${ lookLike || level }` }>{ children }</h1>;
	};

};

Heading.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	level: PropTypes.string,
};

Heading.defaultProps = {
	className: '',
	level: 'h1',
};

export default Heading;
