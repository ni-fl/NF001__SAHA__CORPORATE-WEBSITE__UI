import Section from 'components/04-layouts/section/section';
import Picture from 'components/01-atoms/picture/picture';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

const BehindTheScenes = ({ data }) => {

	// REGISTER PLUGIN
	gsap.registerPlugin(ScrollTrigger);

	// CREATE REFS
	const behindTheScenesRef = useRef();
	const behindTheScenesTimelineRef = useRef();

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			behindTheScenesTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: behindTheScenesRef.current, start: 'top bottom-=80px', end: 'bottom top+=80px' } });
			behindTheScenesTimelineRef.current.to('.behind-the-scenes .images__item', { autoAlpha: 1, duration: 1, top: 0, stagger: 0.25 }, 0.5);
		}, behindTheScenesRef);
		return () => { return context.revert(); };
	}, []);

	// GET ALL IMAGES
	const items = data && data.attributes.images.data.map((item) => {
		return {
			id: item.id,
			preview: item.attributes,
		};
	});

	return (
		<Section className="behind-the-scenes" ref={ behindTheScenesRef }>
			<div className="behind-the-scenes__images images">
				{ items?.map((item) => {
					return (
						<Picture className="images__item animation--fade-in" src={ item.preview?.url } key={ item.id } alt="Image" width={ item.preview.width } height={ item.preview.height } />
					);
				})}
			</div>
		</Section>
	);

};

export default BehindTheScenes;
