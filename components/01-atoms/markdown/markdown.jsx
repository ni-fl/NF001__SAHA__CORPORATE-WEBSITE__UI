import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ className, children, modifier, size }) => {

	return (
		<ReactMarkdown className={ ` ${ className } markdown ${ modifier ? `markdown--${ modifier }` : '' } ${ size ? `markdown--${ size }` : '' } ` }>
			{ children }
		</ReactMarkdown>
	);

};

Markdown.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string,
	modifier: PropTypes.string,
	size: PropTypes.string,
};

Markdown.defaultProps = {
	className: '',
	modifier: '',
	children: null,
	size: '',
};

export default Markdown;
