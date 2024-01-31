'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Markdown from 'components/01-atoms/markdown/markdown';
import Picture from 'components/01-atoms/picture/picture';
import Anchor from 'components/01-atoms/anchor/anchor';
import { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
		
// COMPONENT
const Component = ({ data = null }) => {

	// CREATE REFS
	const aboutMeRef = useRef();
	const aboutMeTimelineRef = useRef();

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger, useGSAP);
	}, []);

	// ANIMATE ELEMENTS
	useGSAP(() => {

		// CREATE TIMELINE
		aboutMeTimelineRef.current = gsap.timeline({ delay: 0.25, paused: true })
		.to('.about-me .about-me__image', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0)
		.to('.about-me .content__heading', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.25)
		.to('.about-me .content__text', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.5)
		.to('.about-me .content__anchor', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.75)

		// CREATE SCROLL-TRIGGER
		ScrollTrigger.create({ 
			trigger: aboutMeRef.current, 
			start: 'top bottom-=80px', 
			end: 'bottom top+=80px', 
			markers: false, 
			animation: aboutMeTimelineRef.current,
		});
		
	}, { scope: aboutMeRef });

	// RENDER
	return (
		<Section className="about-me" ref={ aboutMeRef }>
			<div className="about-me__content content">
				<Heading className="content__heading animation--fade-in" level="h2">{ data?.attributes.heading }</Heading>
				<Markdown className="content__text animation--fade-in">{ data?.attributes.text }</Markdown>
				<Anchor className="content__anchor animation--fade-in" href={ data?.attributes.button.link || '/' }>{ data?.attributes.button.label }</Anchor>
			</div>
			<Picture className="about-me__image animation--fade-in" src={ data?.attributes.image.data?.attributes.url } alt="Image" />
		</Section>
	);

};

// EXPORTS
export default Component;
