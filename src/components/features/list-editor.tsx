import React, { FunctionComponent, useEffect, useState } from 'react';
import { CompositeFeature, Device, DeviceState, GenericExposedFeature, GenericOrCompositeFeature } from '../../types';
import Button from '../button';
import { Feature } from './composite/Feature';
import { FeatureWrapper } from './composite/FeatureWrapper';

type ListEditorProps = {
    value: any[];
    onChange(value: any[]): void;
    feature: GenericOrCompositeFeature;
    parentFeatures: (CompositeFeature | GenericExposedFeature)[];
};

const ListEditor: FunctionComponent<ListEditorProps> = (props) => {
    const { onChange, value, feature, parentFeatures, ...rest } = props;
    const [currentValue, setCurrentValue] = useState<any[]>(value);

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    const replaceList = (newListValue: any[]) => {
        setCurrentValue(newListValue);
        onChange(newListValue);
    };

    const onItemChange = (itemValue: any, itemIndex: number) => {
        const newListValue = [...currentValue];
        if (typeof itemValue === 'object') {
            itemValue = { ...currentValue[itemIndex], ...itemValue };
        }
        newListValue[itemIndex] = itemValue;
        replaceList(newListValue);
    };

    const handleRemoveClick = (itemIndex: number) => () => {
        const newListValue = [...currentValue];
        newListValue.splice(itemIndex, 1);
        replaceList(newListValue);
    };

    const handleAddClick = () => setCurrentValue([...currentValue, {}]);

    if (currentValue.length === 0) {
        return (
            <div className="mt-3 mb-3 row">
                <Button<void> className="btn btn-success col-1 me-2" onClick={handleAddClick}>
                    +
                </Button>
            </div>
        );
    }
    return (
        <div>
            {currentValue.map((itemValue, itemIndex) => {
                const showAddButton = currentValue.length - 1 === itemIndex;
                return (
                    <div className="mt-3 mb-3 row" key={itemIndex}>
                        <div className="col-10">
                            <Feature
                                feature={feature as CompositeFeature}
                                device={{} as Device}
                                deviceState={itemValue as DeviceState}
                                onChange={(endpoint, value) => {
                                    onItemChange(value, itemIndex);
                                }}
                                onRead={(a, b) => {}}
                                featureWrapperClass={FeatureWrapper}
                                parentFeatures={parentFeatures}
                            />
                        </div>
                        <div className="col-2">
                            <div className="btn-group" role="group">
                                <Button<void> className="btn btn-danger me-2" onClick={handleRemoveClick(itemIndex)}>
                                    -
                                </Button>
                                <Button<void>
                                    className={`btn btn-success ${showAddButton ? '' : 'invisible'}`}
                                    onClick={handleAddClick}
                                >
                                    +
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListEditor;
