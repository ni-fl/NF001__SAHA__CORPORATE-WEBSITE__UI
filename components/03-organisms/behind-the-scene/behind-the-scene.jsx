'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import PictureList from 'components/02-molecules/picture-list/picture-list';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// COMPONENT
const Component = ({ data = null }) => {

	// CREATE REFS
	const behindTheSceneRef = useRef();
	const behindTheSceneTimelineRef = useRef();

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger, useGSAP);
	}, []);

	// ANIMATE ELEMENTS
	useGSAP(() => {

		// CREATE TIMELINE
		behindTheSceneTimelineRef.current = gsap.timeline({ delay: 0.25, paused: true })
			.to('.behind-the-scene .picture-list__item', { autoAlpha: 1, duration: 1, top: 0, stagger: 0.25 }, 0.5);

		// CREATE SCROLL-TRIGGER
		ScrollTrigger.create({ 
			trigger: behindTheSceneRef.current, 
			start: 'top bottom-=80px', 
			end: 'bottom top+=80px', 
			markers: false,
			animation: behindTheSceneTimelineRef.current,
		});

	}, { scope: behindTheSceneRef } );

	// GET ALL IMAGES
	const items = data && data.attributes.images.data.map((item) => {
		return {
			id: item.id,
			image: item.attributes,
		};
	});

	// RENDER
	return (
		<Section className="behind-the-scene" ref={ behindTheSceneRef }>
			<PictureList items={ items } />
		</Section>
	);

};

// EXPORTS
export default Component;
