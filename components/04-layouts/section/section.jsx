// IMPORTS
import { forwardRef } from 'react';

// COMPONENT
const Section = forwardRef(({ className = '', children = null }, ref) => {

	// RENDER
	return (
		<section className={ `${ className } section` } id={ className } ref={ ref }>
			<div className={ `${ className }__inner section__inner` }>
				{ children }
			</div>
		</section>
	);

});

// EXPORTS
export default Section;
