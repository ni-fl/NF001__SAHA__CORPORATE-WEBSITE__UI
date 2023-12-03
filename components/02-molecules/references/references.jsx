// IMPORTS
import Heading from 'components/01-atoms/heading/heading';
import Text from 'components/01-atoms/text/text';

// COMPONENT
const Component = ({ className, items }) => {

	// RENDER
	return (
		<div className={ `${ className } references` }>
			<div className="references__inner">
				{ items.map((item) => (
					<div className="references__item item" key={ item.id }>
						<Heading className="item__heading" level="h3">{ item.title }</Heading>
						<span className="item__content content">
							<Text className="content__name text">{ item.name }</Text>, <a className="content__anchor text" href={ item.anchor.link } target="_blank" rel="noreferrer">{ item.anchor.label }</a>
						</span>
					</div>
				))}
			</div>
		</div>
	);

};

// EXPORTS
export default Component;
