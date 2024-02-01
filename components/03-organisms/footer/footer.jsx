'use client';

// IMPORTS
import Text from 'components/01-atoms/text/text';
import Image from 'next/image';
import Heading from 'components/01-atoms/heading/heading';
import Link from 'next/link';
import { useLayoutEffect, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// COMPONENT
const Component = () => {
	
	// CREATE REFS
	const footerRef = useRef();
	const footerTimelineRef = useRef();

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger, useGSAP);
	}, []);
	
	// ANIMATE ELEMENTS
	useGSAP(() => {
		
		// CREATE TIMELINE
		footerTimelineRef.current = gsap.timeline({ delay: 0.25, paused: true })
		.to('.footer .footer__logo', { autoAlpha: 1, duration: 1, ease: 'power4.out', top: 0 }, 0)
		.to('.footer .content__title', { autoAlpha: 1, duration: 1, ease: 'power4.out', top: 0 }, 0.25)
		.to('.footer .content__contact-links', { autoAlpha: 1, duration: 1, ease: 'power4.out', top: 0 }, 0.25)
		.to('.footer .content__social-media-links', { autoAlpha: 1, duration: 1, ease: 'power4.out', top: 0 }, 0.25)
		.to('.footer .content__legal-links', { autoAlpha: 1, duration: 1, ease: 'power4.out', top: 0 }, 0.25)
		.to('.footer .content__copyright', { autoAlpha: 1, duration: 1, ease: 'power4.out', top: 0 }, 0.25);
		
		// CREATE SCROLL-TRIGGER
		ScrollTrigger.create({ 
			trigger: footerRef.current, 
			start: 'top bottom-=80px', 
			end: 'bottom top+=80px', 
			markers: false,
			animation: footerTimelineRef.current,
		});
		
	}, { scope: footerRef });
	
	// FALLBACK FOR ANIMATION IN FIREFOX
	useEffect(() => {
		setTimeout(() => {
			const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
			const hasPlayed = footerTimelineRef.current.progress();
			if (isFirefox && !hasPlayed) footerTimelineRef.current.play();
		}, 5000)
	}, []);

	// GET CURRENT YEAR
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	// RENDER
	return (
		<footer className="footer section" ref={ footerRef }>
			<div className="footer__inner section__inner">
				<Image className="footer__logo animation--fade-in" src="/logos/small.svg" alt="Samira Haas" width="140" height="40" priority />
				<div className="footer__content content">
					<Heading className="content__title animation--fade-in" level="h3">Fotografie und Gestaltung</Heading>
					<div className="content__contact-links contact-links animation--fade-in">
						<Link className="contact-links__item" href="mailto:mail@samirahaas.ch">mail@samirahaas.ch</Link>
						<Link className="contact-links__item" href="tel:0797894050">079 789 40 50</Link>
					</div>
					<div className="content__social-media-links social-media-links animation--fade-in">
						<Link className="social-media-links__item" href="https://www.instagram.com/samirahaas_/" target="_blank" rel="noreferrer">Instagram</Link>
					</div>
					<div className="content__legal-links legal-links animation--fade-in">
						<Link className="legal-links__item" href="/imprint">Impressum</Link>
						<Link className="legal-links__item" href="/data-privacy">Datenschutz</Link>
					</div>
					<Text className="content__copyright animation--fade-in">© { getCurrentYear() } Samira Haas</Text>
				</div>
			</div>
		</footer>
	);

};

// EXPORTS
export default Component;
