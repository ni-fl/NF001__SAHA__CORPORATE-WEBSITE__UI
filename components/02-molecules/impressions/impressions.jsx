import Picture from 'components/01-atoms/picture/picture';

const Impressions = ({ className, items }) => {

	return (
		<div className={ `${ className } impressions` }>
			<div className="impressions__inner">
				{ items.map((item) => (
					<div className="impressions__item item" key={ item.id }>
						{ item.group.data.map((image, index) => (
							<Picture className="item__image animation--fade-in" src={ image.attributes.url } key={ `${ item.id }-${ index } ` } quality={ 100 } alt="Image" width={ image.attributes.width } height={ image.attributes.height } priority={ false } />
						))}
					</div>
				))}
			</div>
		</div>
	);

};

export default Impressions;
