// COMPONENT
const Component = ({ className = '', children = null, href = '#', onClick = null }) => {

	// RENDER
	return (
		<a className={ ` ${ className } anchor` } href={ href } onClick={ onClick }>
			<span className="anchor__content heading heading--h3">
				{ children }
			</span>
		</a>
	);

};

// EXPORTS
export default Component;
