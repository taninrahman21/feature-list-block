
import Content from './Content';

const General = ({ attributes, setAttributes, activeFeature, setActiveFeature }) => {
    return <>
        <Content  attributes={attributes} setAttributes={setAttributes} activeFeature={activeFeature} setActiveFeature={setActiveFeature}/>
    </>;
};

export default General;
