'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import HighlightSlider from 'components/02-molecules/highlight-slider/highlight-slider';
import HighlightPreview from 'components/02-molecules/highlight-preview/highlight-preview';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect, useLayoutEffect } from 'react';
import { useGSAP } from '@gsap/react';

// COMOPNENT
const Component = ({ data = null }) => {

	// CREATE REFS
	const teaserRef = useRef();
	const teaserTimelineRef = useRef();

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger, useGSAP);
	}, []);

	// ANIMATE ELEMENTS
	useGSAP(() => {

		// CREATE TIMELINE
			teaserTimelineRef.current = gsap.timeline({ delay: 0.25, paused: true })
				.to('.teaser .teaser__highlight-slider', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0)
				.to('.teaser .teaser__highlight-preview', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0)
				.to('.teaser .teaser__highlight-slider .projects__box', { autoAlpha: 1, top: 0, duration: 1, ease: 'power4.out' }, 0.25);

			// CREATE SCROLL-TRIGGER
			ScrollTrigger.create({ 
				trigger: teaserRef.current, 
				start: 'top bottom-=160px', 
				end: 'bottom top+160px', 
				markers: false,
				animation: teaserTimelineRef.current,
			});

	}, []);

	// RENDER
	return (
		<Section className="teaser" ref={ teaserRef }>
			<HighlightSlider className="teaser__highlight-slider animation--fade-in" items={ data?.attributes.projects.data } />
			<HighlightPreview className="teaser__highlight-preview animation--fade-in" items={ data?.attributes.projects.data } />
		</Section>
	);

};

// EXPORTS
export default Component;
