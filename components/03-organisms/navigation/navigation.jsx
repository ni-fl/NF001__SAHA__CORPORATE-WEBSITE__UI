import Hamburger from 'components/01-atoms/hamburger/hamburger';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Navigation = () => {

	// SETUP STATE
	const [isOpen, setIsOpen] = useState(false);

	// SETUP ROUTER
	const router = useRouter();

	// SETUP REFS
	const navigationRef = useRef();
	const menuTimelineRef = useRef();

	// OPEN MENU
	const openMenu = () => {
		menuTimelineRef.current.play();
	};

	// CLOSE MENU
	const closeMenu = () => {
		menuTimelineRef.current.reverse();
	};

	// TOGGLE MENU
	const toggleMenu = () => {
		isOpen ? closeMenu() : openMenu();
		setIsOpen(!isOpen);
	};

	// HANDLE LINK KLICK
	const handleLinkClick = (event, targetPath) => {
		event.preventDefault();
		const currentPath = router.pathname;
		if (currentPath === targetPath) {
			toggleMenu();
		} else {
			router.push(targetPath);
		};
	};

	// ANIMATE HAMBURGER
	useEffect(() => {
		const context = gsap.context(() => {
			gsap.to(['.navigation .bar__logo', '.navigation .bar__hamburger'], { autoAlpha: 1, duration: 2 });
		}, navigationRef.current);
		return () => { return context.revert(); };
	}, []);

	// ANIMATE MENU
	useEffect(() => {
		const context = gsap.context(() => {
			menuTimelineRef.current = gsap.timeline({ paused: true });
			menuTimelineRef.current.to('.navigation .navigation__menu', { top: '0vh', duration: 1, ease: 'power4.inOut' }, 0);
			menuTimelineRef.current.to('.navigation .main-links__item', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.inOut', stagger: 0.05 }, 0.5);
			menuTimelineRef.current.to('.navigation .social-links__item', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.inOut' }, 1);
		}, navigationRef.current);
		return () => { return context.revert(); };
	}, []);

	return (
		<nav className="navigation" ref={ navigationRef }>
			<div className="navigation__inner">
				<div className="navigation__placeholder" />
				<div className="navigation__background" />
				<div className="navigation__bar bar">
					<div className="bar__inner">
						<Link className="bar__logo-link" href="/" onClick={ (event) => { return handleLinkClick(event, '/'); } }>
							<Image className="bar__logo" src="/logos/full.svg" alt="Samira Haas" width="140" height="40" priority />
						</Link>
						<Hamburger className="bar__hamburger" isOpen={ isOpen } onClick={ toggleMenu } />
					</div>
				</div>
				<div className="navigation__menu menu">
					<div className="menu__main-links main-links">
						<Link className="main-links__item heading--h1 animation--fade-in" href="/corporate" onClick={ (event) => { return handleLinkClick(event, '/corporate'); } }>Corporate</Link>
						<Link className="main-links__item heading--h1 animation--fade-in" href="/storytelling" onClick={ (event) => { return handleLinkClick(event, '/storytelling'); } }>Storytelling</Link>
						<Link className="main-links__item heading--h1 animation--fade-in" href="/architecture" onClick={ (event) => { return handleLinkClick(event, '/architecture'); } }>Architektur</Link>
						<Link className="main-links__item heading--h1 animation--fade-in" href="/weddings" onClick={ (event) => { return handleLinkClick(event, '/weddings'); } }>Hochzeiten</Link>
						<Link className="main-links__item heading--h1 animation--fade-in" href="/design" onClick={ (event) => { return handleLinkClick(event, '/design'); } }>Gestaltung</Link>
						<Link className="main-links__item heading--h1 animation--fade-in" href="/contact" onClick={ (event) => { return handleLinkClick(event, '/contact'); } }>Kontakt</Link>
					</div>
					<div className="menu__social-links social-links animation--fade-in">
						<Link className="social-links__item" href="/">Instagram</Link>
					</div>
				</div>
			</div>
		</nav>
	);

};

export default Navigation;
