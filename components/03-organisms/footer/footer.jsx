import Link from 'next/link';
import Text from 'components/01-atoms/text/text';
import Image from 'next/image';
import Heading from 'components/01-atoms/heading/heading';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Footer = () => {

	// REGISTER PLUGIN
	gsap.registerPlugin(ScrollTrigger);

	// CREATE REFS
	const footerRef = useRef();
	const footerTimelineRef = useRef();

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			footerTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: footerRef.current, start: 'top bottom-=80px', end: 'bottom top+=80px', markers: false } });
			footerTimelineRef.current.to('.footer .footer__logo', { autoAlpha: 1, duration: 1, ease: 'power4.out', top: 0 }, 0);
			footerTimelineRef.current.to('.footer .content__title', { autoAlpha: 1, duration: 1, ease: 'power4.out', top: 0 }, 0.25);
			footerTimelineRef.current.to('.footer .content__contact-links', { autoAlpha: 1, duration: 1, ease: 'power4.out', top: 0 }, 0.25);
			footerTimelineRef.current.to('.footer .content__social-media-links', { autoAlpha: 1, duration: 1, ease: 'power4.out', top: 0 }, 0.25);
			footerTimelineRef.current.to('.footer .content__legal-links', { autoAlpha: 1, duration: 1, ease: 'power4.out', top: 0 }, 0.25);
			footerTimelineRef.current.to('.footer .content__copyright', { autoAlpha: 1, duration: 1, ease: 'power4.out', top: 0 }, 0.25);
		}, footerRef);
		return () => { return context.revert(); };
	}, []);

	// GET CURRENT YEAR
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

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
						<Link className="social-media-links__item" href="https://www.instagram.com/samirahaas_/" target="_blank">Instagram</Link>
						<Link className="social-media-links__item" href="https://www.facebook.com/samira.haas" target="_blank">Facebook</Link>
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

export default Footer;
