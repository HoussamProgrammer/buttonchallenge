import React from 'react'
import './Button.scss'
import * as MdIcons from 'react-icons/md';

const variantsClasses = {
	'text': 'btn--text',
	'outline': 'btn--outline'
};

const sizeClasses = {
	'sm': 'btn--sm',
	'md': 'btn--md',
	'lg': 'btn--lg'
};

function Button({
	variant = '',
	disabledShadow,
	disabled = false,
	startIcon,
	endIcon,
	size,
	color,
	text = 'Default'
}) {
	let cssClasses = 'btn'
	let startIconVal;
	let endIconVal;

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

	if (variant === '') {
		cssClasses += ' btn--default'
	} else {
		try {
			cssClasses += ` ${variantsClasses[variant]}`;
		} catch (error) {
			console.log(`🚫 unknown variant value #variant: ${variant}`);
		}
	}

	if (!disabledShadow) { cssClasses += ' btn--shadow'; }
	if (startIcon) {
		try {
			startIconVal = MdIcons[startIcon]();
		} catch (error) {
			console.log(`🚫 unknown argument #startIcon: ${startIcon}`);
		}
	}
	if (endIcon) {
		try {
			endIconVal = MdIcons[endIcon]();
		} catch (error) {
			console.log(`🚫 unknown argument #endIcon: ${endIcon}`);
		}
	}

	return (
		<button className={cssClasses} disabled={disabled}>
			{startIcon ? startIconVal : ''}
			{text}
			{endIcon ? endIconVal : ''}
		</button>
	)
}

export default Button