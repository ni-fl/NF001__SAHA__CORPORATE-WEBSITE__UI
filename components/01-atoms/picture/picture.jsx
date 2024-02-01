// IMPORTS
import Image from 'next/image';

// COMPONENT
const Component = ({ className = '', src = '', alt = '', quality = '', priority = '', width = '', height = '', onLoad = '' }) => {

	// RENDER
	return (
		<div className={ `${ className } picture` }>
			{ src ? (
				<Image className="picture__source" src={ src } alt={ alt } width={ width || 2500 } height={ height || 1600 } quality={ quality || 100 } priority={ priority = false } onLoad={ onLoad  } />
			) : null }
		</div>
	);

};

// EXPORTS
export default Component;
