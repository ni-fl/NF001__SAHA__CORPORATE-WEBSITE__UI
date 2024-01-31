'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Text from 'components/01-atoms/text/text';
import Markdown from 'components/01-atoms/markdown/markdown';
import Picture from 'components/01-atoms/picture/picture';
import { gsap } from 'gsap';
import { useRef, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// COMPONENT
const Component = ({ data = null }) => {

	// CREATE REFS
	const sayHelloRef = useRef();
	const sayHelloTimelineRef = useRef();

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger, useGSAP);
	}, []);

	// ANIMATE ELEMENTS
	useGSAP(() => {

		// CREATE TIMELINE
		sayHelloTimelineRef.current = gsap.timeline({ delay: 0.25, paused: true });
		sayHelloTimelineRef.current.to('.say-hello .content__heading .heading__item', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0);
		sayHelloTimelineRef.current.to('.say-hello .say-hello__image', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.25);
		sayHelloTimelineRef.current.to('.say-hello .content__text', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.5);

		// CREATE SCROLL-TRIGGER
		ScrollTrigger.create({ 
			trigger: sayHelloRef.current, 
			start: 'top bottom-=80px', 
			end: 'bottom top+=80px', 
			markers: false, 
			animation: sayHelloTimelineRef.current
		}); 

	}, { scope: sayHelloRef });

	// RENDER
	return (
		<Section className="say-hello" ref={ sayHelloRef }>
			<div className="say-hello__content content">
				<Heading className="content__heading heading" level="h1" lookLike="h1">
					<span className="heading__item animation--fade-in">{ data?.attributes.heading.top }</span>
					<span className="heading__item animation--fade-in">{ data?.attributes.heading.sub }</span>
				</Heading>
				<Markdown className="content__text animation--fade-in">{ data?.attributes.text }</Markdown>
			</div>
			<Picture className="say-hello__image animation--fade-in" src={ data?.attributes.image.data?.attributes.url } alt="Samira Haas" priority />
		</Section>
	);

};

// EXPORTS
export default Component;
