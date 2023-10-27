// IMPORTS
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

// COMPONENT
const Component = ({ className }) => {

	// SETUP REFS
	const scrollerRef = useRef();

	// HANDLE CLICK
	const handleClick = () => {
		if (typeof window !== 'undefined') {
			const viewportHeight = window.innerHeight;
			window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
		};
	};

	// SCROLL DOWN
	useEffect(() => {
		if (!scrollerRef) return;
		const context = gsap.context(() => {
			gsap.to('.scroller__icon', { top: 8, repeat: -1, duration: 1, yoyo: true, ease: 'sine.out' });
		}, scrollerRef);
		return () => { return context.revert(); };
	}, []);

	// RENDER
	return (
		<div className={ `${ className } scroller` } href="/#sroller-target" ref={ scrollerRef }>
			<img className="scroller__icon" src="/icons/chevron-down.svg" alt="Scroller" onClick={ handleClick } />
		</div>
	);

};

// EXPORTS
export default Component;
