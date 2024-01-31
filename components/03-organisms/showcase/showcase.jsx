'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import PictureCollection from 'components/02-molecules/picture-collection/picture-collection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect, useLayoutEffect } from 'react';
import { useGSAP } from '@gsap/react';

// COMPONENT
const Component = ({ data = null }) => {

	// CREATE REFS
	const showcaseRef = useRef();
	const showcaseTimelineRef = useRef();

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger, useGSAP);
	}, []);

	// ANIMATE ELEMENTS
	useGSAP(() => {

		// CREATE TIMELINE
			showcaseTimelineRef.current = gsap.timeline({ delay: 0.25, paused: true })
				.to('.showcase .heading__item', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0)
				.to('.showcase .picture-collection__item', { autoAlpha: 1, duration: 1, top: 0, stagger: 0.25, ease: 'power4.out' }, 0.5);

			// CREATE SCROLL-TIGGER
			ScrollTrigger.create({ 
				trigger: showcaseRef.current, 
				start: 'top bottom-=80px', 
				end: 'bottom top+=80px', 
				markers: false, 
				animation: showcaseTimelineRef.current,
			}); 

	}, { scope: showcaseRef });

	// GET ITEMS
	const items = data && data.attributes.showcase.map((item) => {
		return {
			id: item.project.data.id,
			format: item.format,
			heading: item.project.data.attributes.heading,
			image: item.project.data.attributes.preview.data?.attributes,
		};
	});

	// RENDER
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

// EXPORTS
export default Component;
