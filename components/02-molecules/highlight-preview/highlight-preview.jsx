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
	const highlightPreviewTimeline = useRef();
	const highlightPreviewRef = useRef();

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
			if (!items || items.length === 0) return;
			const status = gsap.utils.toArray('.progress .progress__status');
			const images = gsap.utils.toArray('.preview .preview__image');
			const boxes = gsap.utils.toArray('.projects .box');
			highlightPreviewTimeline.current = gsap.timeline({ onComplete: updateCounter });
			highlightPreviewTimeline.current.to(status, { right: '100%', left: '0%', duration: 0, ease: 'power4.out' }, 0);
			highlightPreviewTimeline.current.to(images, { opacity: 0, duration: 1, ease: 'power4.out' }, 0);
			highlightPreviewTimeline.current.to(boxes, { zIndex: 0, duration: 0, ease: 'power4.out' }, 0);
			highlightPreviewTimeline.current.to(images, { zIndex: 0, duration: 0, ease: 'power4.out' }, 0);
			highlightPreviewTimeline.current.to(boxes, { opacity: 0, duration: 1, ease: 'power4.out' }, 0);
			highlightPreviewTimeline.current.to(boxes[counter], { zIndex: 5, duration: 0, ease: 'power4.out' }, 0);
			highlightPreviewTimeline.current.to(images[counter], { zIndex: 5, duration: 0, ease: 'power4.out' }, 0);
			highlightPreviewTimeline.current.to(boxes[counter], { opacity: 1, duration: 1, ease: 'power4.out' }, 0.5);
			highlightPreviewTimeline.current.to(images[counter], { opacity: 1, duration: 1, ease: 'power4.out' }, 0.5);
			highlightPreviewTimeline.current.to(status, { opacity: 1, duration: 0, ease: 'power4.out ' }, 0.5);
			highlightPreviewTimeline.current.to(status, { right: '0%', duration: 6, ease: 'power1.out' }, 0.5);
			highlightPreviewTimeline.current.to(status, { opacity: 0, duration: 1, ease: 'power4.out' }, 8);
			highlightPreviewTimeline.current.to(images[counter], { opacity: 0, duration: 1, ease: 'power4.out' }, 8);
			highlightPreviewTimeline.current.to(images[counter], { opacity: 0, duration: 1, ease: 'power4.out' }, 8);
			highlightPreviewTimeline.current.to(boxes[counter], { opacity: 0, duration: 1, ease: 'power4.out' }, 8);
	}, { scope: highlightPreviewRef, dependencies: [ counter ] });

	// RENDER
	return (
		<div className={ `${ className } highlight-preview` } ref={ highlightPreviewRef }>
			<div className="highlight-preview__preview preview">
				{ items?.map((item) => {
					return (
						<a className="preview__image image" href={ `/project/${ item.id}` } key={ item.id }>
							<Picture className="image__source" src={ item.attributes.teaser.data?.attributes.url } alt="Image" quality={ 100 } priority />
						</a>
					);
				})}
			</div>
			<div className="highlight-preview__progress progress">
				<div className="progress__background" />
				<div className="progress__status" />
			</div>
			<div className="highlight-preview__projects projects">
				{ items?.map((item) => {
					return (
						<a className="projects__box box" key={ item.id } href={ `/project/${ item.id }` }>
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
