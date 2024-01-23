'use client';
// IMPORTS

import Picture from 'components/01-atoms/picture/picture';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

// COMPONENT
const Component = ({ className, items }) => {

	// REGISTER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// HANDLE ON LOAD
	const handleOnLoad = () => {
		console.log('n0w')
		ScrollTrigger.refresh();
	};

	// RENDER
	return (
		<div className={ `${ className } impressions` }>
			<div className="impressions__inner">
				{ items.map((item) => (
					<div className="impressions__item item" key={ item.id }>
						{ item.group.data?.map((image) => (
							<Picture className="item__image animation--fade-in" src={ image.attributes.url } key={ `${ image.id } ` } quality={ 100 } alt="Image" width={ image.attributes.width } height={ image.attributes.height } priority={ true } onLoad={ handleOnLoad } />
						))}
					</div>
				))}
			</div>
		</div>
	);

};

// EXPORTS
export default Component;
