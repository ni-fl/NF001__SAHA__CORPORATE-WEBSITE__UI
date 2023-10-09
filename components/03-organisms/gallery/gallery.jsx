import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Impressions from 'components/02-molecules/impressions/impressions';
import ImpressionsNavigation from 'components/02-molecules/impressions-navigation/impressions-navigation';
import Markdown from 'components/01-atoms/markdown/markdown';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

const Gallery = ({ data }) => {

	// GET PATH ID
	const router = useRouter();
	const { id } = router.query;

	// REGISTER PLUGIN
	gsap.registerPlugin(ScrollTrigger);

	// CREATE REFS
	const galleryRef = useRef(null);
	const galleryTimelineRef = useRef(null);

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			galleryTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: galleryRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false } });
			galleryTimelineRef.current.to('.gallery .gallery__heading', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.25);
			galleryTimelineRef.current.to('.gallery .gallery__description', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.5);
			galleryTimelineRef.current.to('.gallery .gallery__impressions', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.5);
			galleryTimelineRef.current.to('.gallery .impressions__item .item__image', { autoAlpha: 1, duration: 1, top: 0, stagger: 0.25, ease: 'power4.out' }, 1);
			galleryTimelineRef.current.to('.gallery .gallery__navigation', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 2.5);
		}, galleryRef);
		return () => { context.revert(); };
	}, [id]);

	return (
		<Section className="gallery" ref={ galleryRef } key={ id }>
			<Heading className="gallery__heading animation--fade-in" level="h1" lookLike="h4">{ data.attributes.heading }</Heading>
			{ data.attributes.description ? <Markdown className="gallery__description animation--fade-in">{ data.attributes.description }</Markdown> : null }
			{ data.attributes.images ? <Impressions className="gallery__impressions animation--fade-in" items={ data.attributes.images } /> : null }
			{ data.attributes.navigation && data.attributes.navigation?.next.data.id && data.attributes.navigation?.previous.data.id ? 	<ImpressionsNavigation className="gallery__navigation animation--fade-in" next={ data.attributes.navigation.next.data.id } previous={ data.attributes.navigation.previous.data.id } /> : null }
		</Section>
	);

};

export default Gallery;
