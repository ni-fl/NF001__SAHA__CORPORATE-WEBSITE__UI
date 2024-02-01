'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Link from 'next/link';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// COMPONENT
const Component = () => {

	// CREATE REFS
	const ctaRef = useRef();
	const ctaTimelineRef = useRef();

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger, useGSAP);
	}, []);

	// ANIMATE ELEMENTS
	useGSAP(() => {

		// CREATE TIMELINE
		ctaTimelineRef.current = gsap.timeline({ delay: 0.25, paused: true })
			.to('.cta .cta__link', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.25);

		// CREATE SCROLL-TRIGGER
			ScrollTrigger.create({ 
				trigger: ctaRef.current, 
				start: 'top bottom-=80px', 
				end: 'bottom top+=80px', 
				markers: false,
				animation: ctaTimelineRef.current,
			});

	}, { scope: ctaRef });

	// RENDER
	return (
		<Section className="cta" ref={ ctaRef }>
			<Link className="cta__link link animation--fade-in" href="mailto:mail@samirahaas.ch">
				<Heading className="link__text" level="h2">Let's work together</Heading>
				<img className="link__icon" src="/icons/arrow-right.svg" width="56" height="32" alt="Arrow" />
			</Link>
		</Section>
	);

};

// COMPONENTS
export default Component;
