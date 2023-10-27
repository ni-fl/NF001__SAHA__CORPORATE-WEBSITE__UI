// COMPONENT
const Component = ({ className, children }) => {

	// RENDER
	return (
		<div className={ `${ className } blank-page` }>
			{ children }
		</div>
	);

};

// EXPORTS
export default Component;
