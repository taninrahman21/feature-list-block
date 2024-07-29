import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

// Settings Components
import { tabController } from '../../../../../Components/utils/functions';

import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes, activeFeature, setActiveFeature }) => {

	return <>
		<InspectorControls>
			<div className='bBlocksInspectorInfo'>
				Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
			</div>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
				{'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} activeFeature={activeFeature} setActiveFeature={setActiveFeature} />}


				{'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
			</>}</TabPanel>
		</InspectorControls>
	</>;
};
export default Settings;