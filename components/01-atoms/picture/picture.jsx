// IMPORTS
import Image from 'next/image';

// COMPONENT
const Component = ({ className, src, alt, quality, priority = true, width, height }) => {

	// RENDER
	return (
		<div className={ `${ className } picture` }>
			{ src ? (
				<Image className="picture__source" src={ src } alt={ alt } width={ width || 2500 } height={ height || 1600 } quality={ quality || 100 } priority={ priority } loading="eager" />
			) : null }
		</div>
	);

};

// EXPORTS
export default Component;
