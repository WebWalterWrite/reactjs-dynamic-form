import { css } from 'styled-components';

const sizes = {
	desktop: 4096, // Apple imac 21.5inch & other
	laptop: 2560, // Apple macbook pro & other
    tablet: 2048, // tablet
    mPhone: 460, // iphone XS Max/8+/7+6+ - Google pixel - 
    sPhone: 375, // iphone X/XS/8/7/6 - Samsung Galaxy S7 => S9
    xsPhone: 320, // iphone 5*, htc 8
};
const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label]}px) {
			${css(...args)};
		}
	`;
	return acc;
}, {});

export default media;