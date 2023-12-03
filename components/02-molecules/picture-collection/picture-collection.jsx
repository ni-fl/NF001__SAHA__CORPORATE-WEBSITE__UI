// IMPORTS
import Heading from 'components/01-atoms/heading/heading';
import Picture from 'components/01-atoms/picture/picture';

// COMPONENT
const Component = ({ className, items }) => {

	// RETURN
	return (
		<div className={ `${ className } picture-collection` }>
			<div className="picture-collection__container">
				{ items && items.map((item, index) => (
					<a className="picture-collection__item item animation--fade-in" href={ `/project/${ item.id }` } data-format={ item.format } key={ item.id }>
						<div className="item__image-wrapper">
							<Picture className="item__image" src={ item.preview?.url } key={ item.id } alt="Image" priority={ index <= 1 } />
						</div>
						{ item.heading && (<Heading className="item__heading" level="h5">{ item.heading }</Heading>)}
					</a>
				))}
			</div>
		</div>
	);

};

// EXPORTS
export default Component;
