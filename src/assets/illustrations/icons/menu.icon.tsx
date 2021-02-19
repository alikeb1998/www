import React, {FC} from 'react';

import {Color} from '../../../store/settings/types';

interface Props {
	color: Color;
}

export const Menu: FC<Props> = ({color}) => (
	<svg enableBackground='new 0 0 512 512' height='20' viewBox='0 0 512 512'
			 width='20' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z'
			fill={color} />
		<path
			d='m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z'
			fill={color} />
		<path
			d='m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z'
			fill={color} />
	</svg>
);
