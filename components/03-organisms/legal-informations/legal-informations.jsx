'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import ReactMarkdown from 'react-markdown';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';

// COMPONENT
const Component = ({ data = null }) => {

	// CREATE REFS
	const legalInformationsRef = useRef();
	const legalInformationsTimelineRef = useRef();

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger, useGSAP);
	}, []);

	// ANIMATE ELEMENTS
	useGSAP(() => {

		// CREATE TIMELINE
		legalInformationsTimelineRef.current = gsap.timeline({ delay: 0.25, paused: true })
			.to('.legal-informations .legal-informations__heading .heading__item', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0)
			.to('.legal-informations .paragraphs__item', { autoAlpha: 1, duration: 1, top: 0, stagger: 0.25, ease: 'power4.out' }, 0);

		// CREATE SCROLL-TRIGGER
		ScrollTrigger.create({ 
			trigger: legalInformationsRef.current,
			start: 'top bottom-=80px', 
			end: 'bottom top+=80px', 
			markers: false, 
			animation: legalInformationsTimelineRef.current,
		}); 

	}, { scope: legalInformationsRef });

	// RENDER
	return (
		<Section className="legal-informations" ref={ legalInformationsRef }>
			<Heading className="legal-informations__heading heading" level="h1">
				<span className="heading__item animation--fade-in">{ data.attributes.heading.top }</span>
				<span className="heading__item animation--fade-in">{ data.attributes.heading.sub }</span>
			</Heading>
			<div className="legal-informations__paragraphs paragraphs">
				{ data.attributes.paragraph.map((item) => {
					return (
						<div className="paragraphs__item item animation--fade-in" key={ item.id }>
							<Heading className="item__heading" level="h5">{ item.heading }</Heading>
							<ReactMarkdown className="item__text">{ item.text }</ReactMarkdown>
						</div>
					);
				})}
			</div>
		</Section>
	);

};

// EXPORTS
export default Component;
