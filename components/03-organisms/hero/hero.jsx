'use client';

// IMPORTS
import Heading from 'components/01-atoms/heading/heading';
import Text from 'components/01-atoms/text/text';
import Section from 'components/04-layouts/section/section';
import Scroller from 'components/01-atoms/scroller/scroller';
import { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// COMPONENT
const Component = ({ data = null }) => {

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(useGSAP);
	}, []);

	// CREATE REFS
	const heroRef = useRef();
	const heroTimelineRef = useRef();

	// ANIMATE ELEMENTS
	useGSAP(() => {

		// CREATE TIMELINE
		heroTimelineRef.current = gsap.timeline({ delay: 0.25, paused: false })
			.to('.hero__heading', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.5)
			.to('.hero__text', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.75)
			.to('.hero__scroller', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 1);

	}, { scope: heroRef });

	// RENDER
	return (
		<Section className="hero" ref={ heroRef }>
			<Heading className="hero__heading animation--fade-in">{ data.attributes.heading }</Heading>
			<Text className="hero__text animation--fade-in">{ data.attributes.text } </Text>
			<Scroller className="hero__scroller animation--fade-in" />
		</Section>
	);

};

// EXPORTS
export default Component;
