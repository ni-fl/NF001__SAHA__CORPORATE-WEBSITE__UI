// COMPONENT
const Component = ({ className, children, modifier, size }) => {

	// RENDER
	return (
		<p className={ ` ${ className } text ${ modifier ? `text--${ modifier }` : '' } ${ size ? `text--${ size }` : '' } ` }>
			{ children }
		</p>
	);

};

// EXPORTS
export default Component;
