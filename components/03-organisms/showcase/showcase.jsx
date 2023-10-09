import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import PictureCollection from 'components/02-molecules/picture-collection/picture-collection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect, useMemo } from 'react';

const Showcase = ({ data }) => {

	// REGISTER PLUGIN
	gsap.registerPlugin(ScrollTrigger);

	// CREATE REFS
	const showcaseRef = useRef();
	const showcaseTimelineRef = useRef();

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			showcaseTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: showcaseRef.current, start: 'top bottom-=80px', end: 'bottom top+=80px', markers: false } });
			showcaseTimelineRef.current.to('.showcase .heading__item', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0);
			showcaseTimelineRef.current.to('.showcase .picture-collection__item', { autoAlpha: 1, duration: 1, top: 0, stagger: 0.25, ease: 'power4.out' }, 0.5);
		}, showcaseRef);
		return () => { return context.revert(); };
	});

	// GET ITEMS
	const items = useMemo(() => {
		return data && data.attributes.showcase.map((item) => {
			return {
				id: item.project.data.id,
				format: item.format,
				heading: item.project.data.attributes.heading,
				preview: item.project.data.attributes.preview.data?.attributes,
			};
		});
	});

	return (
		<Section className="showcase" ref={ showcaseRef }>
			<Heading className="showcase__heading heading" level="h1">
				<span className="heading__item animation--fade-in">{ data?.attributes.heading.top }</span>
				<span className="heading__item animation--fade-in">{ data?.attributes.heading.sub }</span>
			</Heading>
			<PictureCollection className="showcase__picture-collection" items={ items } />
		</Section>
	);
};

export default Showcase;
