'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Impressions from 'components/02-molecules/impressions/impressions';
import ImpressionsNavigation from 'components/02-molecules/impressions-navigation/impressions-navigation';
import References from 'components/02-molecules/references/references';
import Markdown from 'components/01-atoms/markdown/markdown';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// COMPONENTS
const Component = ({ data = null }) => {

	// CREATE REFS
	const galleryRef = useRef(null);
	const galleryTimelineRef = useRef(null);

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger, useGSAP);
	}, []);

	// ANIMATE ELEMENTS
	useGSAP(() => {

		 // CREATE TIMELINE
			galleryTimelineRef.current = gsap.timeline({ delay: 0.25, paused: true })
				.to('.gallery .gallery__heading', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.25)
				.to('.gallery .gallery__description', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.5)
				.to('.gallery .gallery__references', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.5)
				.to('.gallery .gallery__impressions', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.5)
				.to('.gallery .impressions__item .item__image', { autoAlpha: 1, duration: 1, top: 0, stagger: 0, ease: 'power4.out' }, 1)
				.to('.gallery .gallery__navigation', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 2.5);

				// CREATE SCROLL-TRIGGER
				ScrollTrigger.create({ 
					trigger: galleryRef.current, 
					start: 'top bottom-=80px', 
					end: 'bottom top+=80px',
					markers: false,
					animation: galleryTimelineRef.current,
				});

	}, { scope: galleryRef });

	// RENDER
	return (
		<Section className="gallery" ref={ galleryRef }>
			{ data && data.attributes && data.attributes.heading ? <Heading className="gallery__heading animation--fade-in" level="h1" lookLike="h4">{ data.attributes.heading }</Heading> : null }
			{ data && data.attributes && data.attributes.description ? <Markdown className="gallery__description animation--fade-in">{ data.attributes.description }</Markdown> : null }
			{ data && data.attributes && data.attributes.references  && data.attributes.references.length ? <References className="gallery__references animation--fade-in" items={ data.attributes.references } /> : null }
			{ data && data.attributes && data.attributes.images ? <Impressions className="gallery__impressions animation--fade-in" items={ data.attributes.images } /> : null }
			{ data && data.attributes && data.attributes.navigation && data.attributes.navigation?.next.data.id && data.attributes.navigation?.previous.data.id ? 	<ImpressionsNavigation className="gallery__navigation animation--fade-in" next={ data.attributes.navigation.next.data.id } previous={ data.attributes.navigation.previous.data.id } /> : null }
		</Section>
	);

};

// EXPORTS
export default Component;
