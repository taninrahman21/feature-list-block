import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { blockIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: blockIcon,
	edit: Edit
});