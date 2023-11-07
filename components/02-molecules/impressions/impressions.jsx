// IMPORTS
import Picture from 'components/01-atoms/picture/picture';

// COMPONENT
const Component = ({ className, items }) => {

	// RENDER
	return (
		<div className={ `${ className } impressions` }>
			<div className="impressions__inner">
				{ items.map((item) => (
					<div className="impressions__item item" key={ item.id }>
						{ item.group.data?.map((image) => (
							<Picture className="item__image animation--fade-in" src={ image.attributes.url } key={ `${ image.id } ` } quality={ 100 } alt="Image" width={ image.attributes.width } height={ image.attributes.height } priority={ false } />
						))}
					</div>
				))}
			</div>
		</div>
	);

};

// EXPORTS
export default Component;
