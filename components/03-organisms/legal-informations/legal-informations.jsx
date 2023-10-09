import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import ReactMarkdown from 'react-markdown';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

const LegalInformations = ({ data }) => {

	// REGISTER PLUGIN
	gsap.registerPlugin(ScrollTrigger);

	// CREATE REFS
	const legalInformationsRef = useRef();
	const legalInformationsTimelineRef = useRef();

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			legalInformationsTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: legalInformationsRef.current, start: 'top bottom-=80px', end: 'bottom top+=80px', markers: false } });
			legalInformationsTimelineRef.current.to('.legal-informations .legal-informations__heading .heading__item', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0);
			legalInformationsTimelineRef.current.to('.legal-informations .paragraphs__item', { autoAlpha: 1, duration: 1, top: 0, stagger: 0.25, ease: 'power4.out' }, 0);
		}, legalInformationsRef);
		return () => { return context.revert(); };
	}, []);

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

export default LegalInformations;
