import PropTypes from 'prop-types';

const IconKnife = ({ color }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='40'
			height='40'
			viewBox='0 0 40 40'>
			<path
				d='M36.6667 3.33331L28.9833 6.24998L17.4333 17.8L23.3333 23.7L34.8667 12.15C37.3833 9.63331 36.6667 3.33331 36.6667 3.33331ZM13.8833 16.6666L11.5333 18.9833L13.8833 21.3333L4.46666 30.7666L10.35 36.6666L19.7833 27.2333L22.1333 29.6L24.5 27.2333L13.8833 16.6666Z'
				fill={color}
			/>
		</svg>
	);
};

IconKnife.propTypes = {
	color: PropTypes.string.isRequired,
};

export default IconKnife;
