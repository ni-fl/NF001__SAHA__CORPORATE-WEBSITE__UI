// COMPONENT
const Component = ({ className = '', children = null, onClick = null }) => {

	// RENDER
	return (
		<button className={ `${ className } button text text--small` } type="button" onClick={ onClick }>{ children }</button>
	);

};

// EXPORTS
export default Component;
