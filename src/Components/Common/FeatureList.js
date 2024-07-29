import React, { useRef } from 'react';
import SVG from 'react-inlinesvg';

const FeatureList = ({ attributes, titleElement, descriptionEl, setActiveFeature }) => {
    const { items } = attributes;
    const iconRef = useRef();

    return (
        <><div className='feature-list'>
            <div className='items-container'>
                {0 < items.length - 1 && <div className="connector-line"></div>}
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className='feature-item' onClick={() => setActiveFeature(index)}>


                                {/* Icon */}
                                <div ref={iconRef} className={`feature-icon icon-${index} rhombus`}>
                                    {
                                        item?.icon?.type === "image" && item?.icon?.imgUrl && <img src={item.icon.imgUrl} alt='' />
                                    }

                                    {
                                        item.icon.type === "icon" && <SVG
                                            src={item.icon.svgIcon?.url}
                                            width={30}
                                            height={30}
                                        />
                                    }
                                </div>


                                {/* Content */}
                                <div className='feature-content'>
                                    {/* Feature Title */}
                                    {
                                        titleElement(item, index)
                                    }

                                    {/* Feature Description */}
                                    {
                                        descriptionEl(item, index)
                                    }
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    );
};

export default FeatureList;