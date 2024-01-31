// IMPORTS
import Text from 'components/01-atoms/text/text';

// COMPONENT
const Component = ({ className = '', next = null, previous = null }) => {

	// RENDER
	return (
		<nav className={ `${ className } impressions-navigation` }>
			<a className="impressions-navigation__item item item--previous" href={ `/project/${ previous}` }>
				<img className="item__icon" src="/icons/chevron-left.svg" alt="Arrow" />
				<Text className="item__label">zurück</Text>
			</a>
			<a className="impressions-navigation__item item item--next" href={ `/project/${ next }` }>
				<Text className="item__label">weiter</Text>
				<img className="item__icon" src="/icons/chevron-right.svg" alt="Arrow" />
			</a>
		</nav>
	);

};

// EXPORTS
export default Component;
