'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';
import { useGSAP } from '@gsap/react';

// COMPONENT
const Component = () => {

	// CREATE REFS
	const jumperRef = useRef();
	const jumperTimelineRef = useRef();

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger, useGSAP);
	}, []);

	// ANIMATE ELEMENTS
	useGSAP(() => {

		// CREATE TIMELINE
		jumperTimelineRef.current = gsap.timeline({ delay: 0.25, paused: true })
			.to('.jumper .jumper__link', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' });

			// CREATE SCROLL-TRIGGER
			ScrollTrigger.create({ 
				trigger: jumperRef.current, 
				start: 'top bottom-=80px', 
				end: 'bottom top+=80px', 
				markers: false, 
				animation: jumperTimelineRef.current,
			});

	}, { scope: jumperRef });

	// RENDER
	return (
		<Section className="jumper" ref={ jumperRef }>
			<Link className="jumper__link animation--fade-in" href="/showcase/business">business</Link>
			<Link className="jumper__link animation--fade-in" href="/showcase/architecture">Architektur</Link>
			<Link className="jumper__link animation--fade-in" href="/showcase/weddings">Hochzeiten</Link>
			<Link className="jumper__link animation--fade-in" href="/showcase/design">Gestaltungen</Link>
			<Link className="jumper__link animation--fade-in" href="/showcase/free-work">Freie Arbeiten</Link>
			<Link className="jumper__link animation--fade-in" href="/contact">Kontakt</Link>
		</Section>
	);

};

// EXPORTS
export default Component;
