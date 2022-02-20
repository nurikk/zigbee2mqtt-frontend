import React, { FunctionComponent, useEffect, useState } from "react";
import Button from "../button";
import RangeEditor from '../range-editor/range-editor';

type RangeListProps = {
    value: number[];
    onChange(value: number[]): void;
    minimal?: boolean;
}

const RangeListEditor: FunctionComponent<RangeListProps> = (props) => {
    const { onChange, value: listValue, minimal, ...rest } = props;
    const [currentListValue, setCurrentListValue] = useState<number[]>(listValue)

    useEffect(() => {
        setCurrentListValue(listValue)
    }, [listValue]);

    const replaceList = (newListValue: number[]) => {
        setCurrentListValue(newListValue);
        onChange(newListValue);
    }

    const onItemChange = (itemValue: number, itemIndex: number) => {
        const newListValue = [...currentListValue];
        newListValue[itemIndex] = itemValue;
        replaceList(newListValue);
    }

    const handleRemoveClick = (itemIndex: number) => () => {
        const newListValue = [...currentListValue];
        newListValue.splice(itemIndex, 1);
        replaceList(newListValue);
    };

    const handleAddClick = () => replaceList( [...currentListValue, 0]);

    if (currentListValue.length === 0) {
        return <div className="mt-3 mb-3 row">
            <Button<void> className="btn btn-success col-1 me-2" onClick={handleAddClick}>+</Button>
        </div>
    }
    return <div>
        {currentListValue.map((itemValue, itemIndex) => {
            const showAddButton = currentListValue.length - 1 === itemIndex;
            return <div className="mt-3 mb-3 row" key={itemIndex}>
                <div className="col-10">
                    <RangeEditor
                        onChange={(newValue) => onItemChange(newValue, itemIndex)}
                        value={itemValue}
                        minimal={minimal}
                        {...rest}
                    />
                </div>
                <div className="btn-group col-2" role="group">
                    <Button<void> className="btn btn-danger me-2" onClick={handleRemoveClick(itemIndex)}>-</Button>
                    <Button<void> className={`btn btn-success ${showAddButton ? '' : 'invisible'}`} onClick={handleAddClick}>+</Button>
                </div>
            </div>
        })}
    </div>
}

export default RangeListEditor;
