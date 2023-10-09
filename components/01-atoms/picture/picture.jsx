import PropTypes from 'prop-types';
import Image from 'next/image';

const Picture = ({ className, src, alt, quality, priority = true, width, height }) => {

	return (
		<div className={ `${ className } picture` }>
			{ src ? (
				<Image className="picture__source" src={ src } alt={ alt } width={ width || 2500 } height={ height || 1600 } quality={ quality || 100 } priority={ priority } />
			) : (
				<div className="picture__alternative" />
			)}
		</div>
	);

};

Picture.propTypes = {
	className: PropTypes.string,
};

Picture.defaultProps = {
	className: '',
};

export default Picture;
