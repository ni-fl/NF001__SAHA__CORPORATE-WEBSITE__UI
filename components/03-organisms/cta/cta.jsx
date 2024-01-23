'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

// COMPONENT
const Component = () => {

	// CREATE REFS
	const ctaRef = useRef();
	const ctaTimelineRef = useRef();

	// REGISTER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			ctaTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: ctaRef.current, start: 'top bottom-=80px', end: 'bottom top+=80px', markers: true } });
			ctaTimelineRef.current.to('.cta .cta__link', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.25);
		}, ctaRef);
		return () => { return context.revert(); };
	}, []);

	// RENDER
	return (
		<Section className="cta" ref={ ctaRef }>
			<a className="cta__link link animation--fade-in" href="mailto:mail@samirahaas.ch">
				<Heading className="link__text" level="h2">Let's work together</Heading>
				<img className="link__icon" src="/icons/arrow-right.svg" width="56" height="32" alt="Arrow" />
			</a>
		</Section>
	);

};

// COMPONENTS
export default Component;
