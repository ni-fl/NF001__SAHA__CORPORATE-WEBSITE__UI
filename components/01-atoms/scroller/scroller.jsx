// IMPORTS
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

// COMPONENT
const Component = ({ className = '' }) => {

	// REGISTER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollToPlugin, useGSAP);
	}, [])

	// SETUP REFS
	const scrollerRef = useRef();

	// HANDLE CLICK
	const handleClick = () => {
		gsap.to(window, { duration: 1, ease: 'power4.inOut', scrollTo: { y: scrollerRef.current  }})
	};

	// ANIMATE ICON
	useGSAP(() => {
			gsap.to('.scroller__icon', { top: 8, repeat: -1, duration: 1, yoyo: true, ease: 'sine.out' });
	}, { scope: scrollerRef });

	// RENDER
	return (
		<div className={ `${ className } scroller` } href="/#sroller-target" ref={ scrollerRef }>
			<img className="scroller__icon" src="/icons/chevron-down.svg" alt="Scroller" onClick={ handleClick } />
		</div>
	);

};

// EXPORTS
export default Component;
