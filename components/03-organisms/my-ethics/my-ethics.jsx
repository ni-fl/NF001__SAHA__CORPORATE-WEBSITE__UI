import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Text from 'components/01-atoms/text/text';
import Picture from 'components/01-atoms/picture/picture';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

const MyEthics = ({ data }) => {

	// REGISTER PLUGIN
	gsap.registerPlugin(ScrollTrigger);

	// CREATE REFS
	const myEthicsRef = useRef();
	const myEthicsTimelineRef = useRef();

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			myEthicsTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: myEthicsRef.current, start: 'top bottom-=80px', end: 'bottom top+=80px', markers: false } });
			myEthicsTimelineRef.current.to('.my-ethics .my-ethics__image', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0);
			myEthicsTimelineRef.current.to('.my-ethics .my-ethics__content .content__heading', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.25);
			myEthicsTimelineRef.current.to('.my-ethics .my-ethics__content .content__text', { autoAlpha: 1, duration: 1, top: 0, stagger: 0.1, ease: 'power4.out' }, 0.5);
		}, myEthicsRef);
		return () => { return context.revert(); };
	}, []);

	return (
		<Section className="my-ethics" ref={ myEthicsRef }>
			<Picture className="my-ethics__image animation--fade-in" src={ data?.attributes.image.data?.attributes.url } alt="Leave" />
			<div className="my-ethics__content content">
				<Heading className="content__heading animation--fade-in" level="h2" lookLike="h3">{ data?.attributes.heading }</Heading>
				{ data?.attributes.values.map((item) => {
					return (
						<Text className="content__text text--large animation--fade-in" key={ item.id }>{ item.value }</Text>
					);
				})}
			</div>
		</Section>
	);

};

export default MyEthics;
