// COMPONENT
const Component = ({ className, children, onClick }) => {

	// RENDER
	return (
		<button className={ `${ className } button text text--small` } type="button" onClick={ onClick }>{ children }</button>
	);

};

// EXPORTS
export default Component;
