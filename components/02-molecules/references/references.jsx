// IMPORTS
import Text from 'components/01-atoms/text/text';
import Link from 'next/link';

// COMPONENT
const Component = ({ className = '', items = [] }) => {

	// RENDER
	return (
		<div className={ `${ className } references` }>
			<div className="references__inner">
				{ items.map((item) => (
					<div className="references__item item" key={ item.id }>
						<Text className="item__heading text--bold" level="h3">{ item.title }</Text>
						<Text className="item__name">{ item.name }</Text>
						{ item.anchor && item.anchor.link && item.anchor.label && <Text className="item__separator text">,</Text>}
						{ item.anchor && item.anchor.link && item.anchor.label && <Link className="item__anchor text" href={ item.anchor.link } target="_blank" rel="noreferrer">{ item.anchor.label }</Link> }
					</div>
				))}
			</div>
		</div>
	);

};

// EXPORTS
export default Component;
