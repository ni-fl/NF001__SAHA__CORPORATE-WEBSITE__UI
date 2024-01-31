// IMPORTS
import { useLayoutEffect, useRef, useState } from 'react';
import Heading from 'components/01-atoms/heading/heading';
import Picture from 'components/01-atoms/picture/picture';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// COMPONENT
const Component = ({ className = '', items = [] }) => {

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(useGSAP);
	}, []);

	// CREATE REFS
	const highlightSliderTimeline = useRef();
	const highlightSliderRef = useRef();

	// SETUP STATE
	const [counter, setCounter] = useState(0);

	// UPDATE COUNTER
	const updateCounter = () => {
		const isLastSlide = counter === items.length - 1;
		const newCounter = isLastSlide ? 0 : counter + 1;
		setCounter(newCounter);
	};

	// SETUP ANIMATION
	useGSAP(() => {
			if (!items || items.lenght === 0) return;
			const status = gsap.utils.toArray('.box .progress__status');
			const images = gsap.utils.toArray('.preview .preview__image');
			const labels = gsap.utils.toArray('.box .box__label');
			const titles = gsap.utils.toArray('.box .box__title');
			highlightSliderTimeline.current = gsap.timeline({ onComplete: updateCounter });
			highlightSliderTimeline.current.to(status, { right: '100%', left: '0%', duration: 0, ease: 'power4.out' }, 0);
			highlightSliderTimeline.current.to(labels, { opacity: 0.2, duration: 1, ease: 'power4.out' }, 0);
			highlightSliderTimeline.current.to(titles, { opacity: 0.2, duration: 1, ease: 'power4.out' }, 0);
			highlightSliderTimeline.current.to(images, { opacity: 0, duration: 1, ease: 'power4.out' }, 0);
			highlightSliderTimeline.current.to(images, { zIndex: 0, duration: 0, ease: 'power4.out' }, 0);
			highlightSliderTimeline.current.to(images[counter], { zIndex: 5, duration: 0, ease: 'power4.out' }, 0);
			highlightSliderTimeline.current.to(labels[counter], { opacity: 1, duration: 2, ease: 'power4.out' }, 0.5);
			highlightSliderTimeline.current.to(titles[counter], { opacity: 1, duration: 2, ease: 'power4.out' }, 0.5);
			highlightSliderTimeline.current.to(images[counter], { opacity: 1, duration: 2, ease: 'power4.out' }, 0.5);
			highlightSliderTimeline.current.to(status[counter], { opacity: 1, duration: 2, ease: 'power4.out ' }, 0.5);
			highlightSliderTimeline.current.to(status[counter], { right: '0%', duration: 6, ease: 'power1.out' }, 0.5);
			highlightSliderTimeline.current.to(status[counter], { opacity: 0, duration: 1, ease: 'power4.out ' }, 8);
			highlightSliderTimeline.current.to(images[counter], { opacity: 0, duration: 1, ease: 'power4.out' }, 8);
			highlightSliderTimeline.current.to(labels[counter], { opacity: 0.2, duration: 1, ease: 'power4.out' }, 8);
			highlightSliderTimeline.current.to(titles[counter], { opacity: 0.2, duration: 1, ease: 'power4.out' }, 8);
	}, { scope: highlightSliderRef, dependencies: [ counter ] });

	// RENDER
	return (
		<div className={ `${ className } highlight-slider` } ref={ highlightSliderRef }>
			<div className="highlight-slider__preview preview">
				{ items?.map((item) => {
					return (
						<a className="preview__image image" href={ `/project/${ item.id }` } key={ item.id }>
							<Picture className="image__source" src={ item.attributes.teaser.data?.attributes.url } alt="Image" priority />
						</a>
					);
				})}
			</div>
			<div className="highlight-slider__projects projects">
				{ items?.map((item) => {
					return (
						<a className="projects__box box" key={ item.id } href={ `/project/${ item.id }` }>
							<div className="box__progress progress">
								<div className="progress__background" />
								<div className="progress__status" />
							</div>
							<Heading className="box__label" level="h3">{ item.attributes.category }</Heading>
							<Heading className="box__title" level="h5">{ item.attributes.heading }</Heading>
						</a>
					);
				})}
			</div>
		</div>
	);

};

// EXPORTS
export default Component;
