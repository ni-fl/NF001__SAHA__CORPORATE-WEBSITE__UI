import Section from 'components/04-layouts/section/section';
import HighlightSlider from 'components/02-molecules/highlight-slider/highlight-slider';
import HighlightPreview from 'components/02-molecules/highlight-preview/highlight-preview';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

const Teaser = ({ data }) => {

	// REGISTER PLUGIN
	gsap.registerPlugin(ScrollTrigger);

	// CREATE REFS
	const teaserRef = useRef();
	const teaserTimelineRef = useRef();

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			teaserTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: teaserRef.current, start: 'top bottom-=160px', end: 'bottom top+160px', markers: false } });
			teaserTimelineRef.current.to('.teaser .teaser__highlight-slider', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0);
			teaserTimelineRef.current.to('.teaser .teaser__highlight-preview', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0);
			teaserTimelineRef.current.to('.teaser .teaser__highlight-slider .projects__box', { autoAlpha: 1, top: 0, duration: 1, ease: 'power4.out' }, 0.25);
		}, teaserRef);
		return () => { return context.revert(); };
	}, []);

	return (
		<Section className="teaser" ref={ teaserRef }>
			<HighlightSlider className="teaser__highlight-slider animation--fade-in" items={ data?.attributes.projects.data } />
			<HighlightPreview className="teaser__highlight-preview animation--fade-in" items={ data?.attributes.projects.data } />
		</Section>
	);

};

export default Teaser;
