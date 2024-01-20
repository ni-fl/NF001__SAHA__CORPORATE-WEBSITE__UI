'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import Picture from 'components/01-atoms/picture/picture';
import PictureList from 'components/02-molecules/picture-list/picture-list';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

// COMPONENT
const Component = ({ data }) => {

	// CREATE REFS
	const behindTheSceneRef = useRef();
	const behindTheSceneTimelineRef = useRef();

	// REGISTER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			behindTheSceneTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: behindTheSceneRef.current, start: 'top bottom-=80px', end: 'bottom top+=80px' } });
			behindTheSceneTimelineRef.current.to('.behind-the-scene .picture-list__item', { autoAlpha: 1, duration: 1, top: 0, stagger: 0.25 }, 0.5);
		}, behindTheSceneRef);
		return () => { return context.revert(); };
	}, []);

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
