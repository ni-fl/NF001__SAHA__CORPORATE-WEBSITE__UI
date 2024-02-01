'use client';

// IMPORTS
import Picture from 'components/01-atoms/picture/picture';

// COMPONENT
const Component = ({ className = '', items = '' }) => {

	// RENDER
	return (
		<div className={ `${ className } impressions` }>
			<div className="impressions__inner">
				{ items.map((item, index) => (
					<div className="impressions__item item" key={ item.id }>
						{ item.group.data && item.group.data.length === 1 && (
							<div className="item__layout layout--one-column">
								{ item.group.data.map((image) => (
									<Picture className="item__image animation--fade-in" src={ image.attributes.url } key={ `${ image.id } ` } quality={ 100 } alt="Image" width={ image.attributes.width } height={ image.attributes.height } priority={ index < 5 ? true : false } />
								))}
							</div>
						)}
						{ item.group.data && item.group.data.length === 2 && (
							<div className="item__layout layout--two-column">
								{ item.group.data.map((image) => (
									<Picture className="item__image animation--fade-in" src={ image.attributes.url } key={ `${ image.id } ` } quality={ 100 } alt="Image" width={ image.attributes.width } height={ image.attributes.height } priority={ index < 5 ? true : false } />
								))}
							</div>
						)}
						{ item.group.data && item.group.data.length === 3 && (
							<div className="item__layout layout--three-column">
								{ item.group.data.map((image) => (
									<Picture className="item__image animation--fade-in" src={ image.attributes.url } key={ `${ image.id } ` } quality={ 100 } alt="Image" width={ image.attributes.width } height={ image.attributes.height } priority={ index < 5 ? true : false } />
								))}
							</div>
						)}
						{ item.group.data && item.group.data.length === 4 && (
							<div className="item__layout layout--four-column">
								{ item.group.data.map((image) => (
									<Picture className="item__image animation--fade-in" src={ image.attributes.url } key={ `${ image.id } ` } quality={ 100 } alt="Image" width={ image.attributes.width } height={ image.attributes.height } priority={ index < 5 ? true : false } />
								))}
							</div>
						)}
						{ item.group.data && item.group.data.length > 4 && (
							<div className="item__layout layout--one-column">
								{ item.group.data.map((image) => (
									<Picture className="item__image animation--fade-in" src={ image.attributes.url } key={ `${ image.id } ` } quality={ 100 } alt="Image" width={ image.attributes.width } height={ image.attributes.height } priority={ index < 5 ? true : false } />
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);

};

// EXPORTS
export default Component;
