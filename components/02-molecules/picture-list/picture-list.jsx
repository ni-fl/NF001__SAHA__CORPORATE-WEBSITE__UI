// IMPORTS
import Picture from 'components/01-atoms/picture/picture';

// COMPONENT
const Component = ({ className, items }) => {

	// RETURN
	return (
		<div className={ `${ className } picture-list` }>
			<div className="picture-collection__container">
				{ items && items.map((item, index) => (
					<div className="picture-list__item item animation--fade-in" key={ item.id }>
						<div className="item__image-wrapper">
							<Picture className="item__image" src={ item.image?.url } key={ item.id } alt="Image" priority={ index <= 1 } width={ item.image.width } height={ item.image.height } />
						</div>
					</div>
				))}
			</div>
		</div>
	);

};

// EXPORTS
export default Component;
