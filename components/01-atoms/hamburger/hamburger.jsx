import PropTypes from 'prop-types';

const Hamburger = ({ className, isOpen, onClick }) => {

	return (
		<button className={ ` ${ className } hamburger hamburger--squeeze ${ isOpen ? 'hamburger--is-open' : '' } ` } type="button" aria-label="Hamburger" onClick={ onClick }>
			<span className="hamburger__box">
				<span className="hamburger__inner" />
			</span>
		</button>
	);

};

Hamburger.propTypes = {
	className: PropTypes.string,
	isOpen: PropTypes.bool,
	onClick: PropTypes.func,
};

Hamburger.defaultProps = {
	className: '',
	isOpen: false,
	onClick: null,
};

export default Hamburger;
