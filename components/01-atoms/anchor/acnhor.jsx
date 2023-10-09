import Link from 'next/link';
import PropTypes from 'prop-types';

const Anchor = ({ className, children, href, onClick }) => {

	return (
		<Link className={ ` ${ className } anchor` } href={ href } onClick={ onClick }>
			<span className="anchor__content">
				{ children }
			</span>
		</Link>
	);

};

Anchor.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func,
};

Anchor.defaultProps = {
	className: '',
	href: '#',
	onClick: null,
};

export default Anchor;
