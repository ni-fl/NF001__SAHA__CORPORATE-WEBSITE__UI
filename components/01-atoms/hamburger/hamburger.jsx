// COMPONENT
const Component = ({ className = '', isOpen = false, onClick = null }) => {

	// RENDER
	return (
		<button className={ ` ${ className } hamburger hamburger--squeeze ${ isOpen ? 'hamburger--is-open' : '' } ` } type="button" aria-label="Hamburger" onClick={ onClick }>
			<span className="hamburger__box">
				<span className="hamburger__inner" />
			</span>
		</button>
	);

};

// EXPORTS
export default Component;
