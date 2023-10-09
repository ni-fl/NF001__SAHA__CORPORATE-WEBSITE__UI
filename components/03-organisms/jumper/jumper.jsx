import Section from 'components/04-layouts/section/section';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

const Jumper = () => {

	// REGISTER PLUGIN
	gsap.registerPlugin(ScrollTrigger);

	// CREATE REFS
	const jumperRef = useRef();
	const jumperTimelineRef = useRef();

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			jumperTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: jumperRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false } });
			jumperTimelineRef.current.to('.jumper .jumper__link', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' });
		}, jumperRef);
		return () => { return context.revert(); };
	}, []);

	return (
		<Section className="jumper" ref={ jumperRef }>
			<Link className="jumper__link animation--fade-in" href="/corporate">Corporate</Link>
			<Link className="jumper__link animation--fade-in" href="/storytelling">Storytelling</Link>
			<Link className="jumper__link animation--fade-in" href="/architecture">Architektur</Link>
			<Link className="jumper__link animation--fade-in" href="/weddings">Hochzeiten</Link>
			<Link className="jumper__link animation--fade-in" href="/design">Gestaltung</Link>
			<Link className="jumper__link animation--fade-in" href="/contact">Kontakt</Link>
		</Section>
	);

};

export default Jumper;
