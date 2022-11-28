import React from 'react'
import './Button.scss'

function Button({
	variant,
	disableShadow,
	disabled,
	startIcon,
	endIcon,
	size,
	color
}) {
	const cssClasses = ''

	const text = 'Default'

	/**
	 * default
	 * outline
	 * text
	 * disabled
	 * startIcon
	 * endIcon
	 * size
	 * color
	 */

	return (
		<button className='btn btn--text'>{text}</button>
	)
}

export default Button