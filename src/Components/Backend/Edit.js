import { useState, useEffect } from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import { produce } from 'immer';


import { tabController } from '../../../../Components/utils/functions';

import '../../editor.scss';
import Settings from './Settings/Settings';
import Style from '../../Components/Common/Style';
import FeatureList from '../../Components/Common/FeatureList';

const Edit = props => {
	const { attributes, setAttributes, isSelected, clientId } = props;
	const [activeFeature, setActiveFeature] = useState(0);

	useEffect(() => tabController(), [isSelected]);

	const { items, valueForEachItem } = attributes;

	const renderTitleEl = (item, index) => (
		<RichText
			className='title'
			tagName={valueForEachItem.titleTag}
			value={item.title.text}
			onChange={(value) => {
				const newItems = produce(items, draft => {
					draft[index].title.text = value;
				});
				setAttributes({ items: newItems });
			}}
			{...(item.title.link ? {
				onClick: () => window.open(`${item.title.link}`, item.title?.openNewTab ? '_blank' : '_self')
			} : {})}
		/>
	);


	const renderDescriptionEl = (item, index) => (
		<RichText
			className='description'
			tagName='p'
			value={item.description}
			onChange={(value) => {
				const newItems = produce(items, draft => {
					draft[index].description = value;
				});
				setAttributes({ items: newItems });
			}}
		/>
	);


	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} activeFeature={activeFeature} setActiveFeature={setActiveFeature} />

		<div {...useBlockProps()} style={{ border: "2px solid orangered" }}>
			<Style attributes={attributes} id={`block-${clientId}`} />

			<FeatureList
				id={`block-${clientId}`}
				attributes={attributes}
				setActiveFeature={setActiveFeature}
				setAttributes={setAttributes}
				titleElement={(item, index) => renderTitleEl(item, index)}
				descriptionEl={(item, index) => renderDescriptionEl(item, index)}
			/>

		</div>
	</>;
}
export default Edit;