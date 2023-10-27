// IMPORTS
import Text from 'components/01-atoms/text/text';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';

// COMPONENT
const Component = ({ className, next, previous }) => {

	// SETUP ROUTER
	const router = useRouter();

	// HANDLE NAVIGATION
	const handleNavigation = (event, target) => {
		event.preventDefault();
		gsap.to('.gallery', { opacity: 0, duration: 0.3 });
		setTimeout(() => {
			router.push(target);
		}, 0.3);
	};

	// RENDER
	return (
		<nav className={ `${ className } impressions-navigation` }>
			<Link className="impressions-navigation__item item item--previous" href={ `/project/${ previous}` } onClick={ (event) => handleNavigation(event, `/project/${ previous }`) }>
				<img className="item__icon" src="/icons/chevron-left.svg" alt="Arrow" />
				<Text className="item__label">zurück</Text>
			</Link>
			<Link className="impressions-navigation__item item item--next" href={ `/project/${ next }` } onClick={ (event) => handleNavigation(event, `/project/${ next }`) }>
				<Text className="item__label">weiter</Text>
				<img className="item__icon" src="/icons/chevron-right.svg" alt="Arrow" />
			</Link>
		</nav>
	);

};

// EXPORTS
export default Component;
