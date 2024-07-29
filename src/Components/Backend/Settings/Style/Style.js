import React from 'react';

import Item from './Item'
import Icon from './Icon'
import Content from './Content'

const Style = ({ attributes, setAttributes }) => {
    const { valueForEachItem } = attributes;

    return <div>
        <Item attributes={attributes} setAttributes={setAttributes} />
        {valueForEachItem.showIcon && <Icon attributes={attributes} setAttributes={setAttributes} />}
        <Content attributes={attributes} setAttributes={setAttributes} />
    </div>;
};

export default Style;
