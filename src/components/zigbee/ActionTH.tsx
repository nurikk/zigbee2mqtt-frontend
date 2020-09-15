import React, { Component, MouseEvent, ThHTMLAttributes} from "react";



import { SortDirection } from "../../types";
import isEqual from "lodash/isEqual";


interface ActionTHProps<T> {
    column: T | T[];
    current: T | T[];
    currentDirection: SortDirection;
    onClick?(arg1: T | T[]): void;
}

export default class ActionTH<T> extends React.Component<ActionTHProps<T> & Omit<ThHTMLAttributes<HTMLTableHeaderCellElement>, 'onClick'>, {}> {
    onClick = (event: MouseEvent): void => {
        event.preventDefault();
        event.stopPropagation();
        const { column, onClick } = this.props;
        onClick && onClick(column);
    };

    renderArrow () {
        const { currentDirection, current, column } = this.props;
        if (isEqual(current, column)) {
            if (currentDirection == "asc") {
                return <i className={`fa fa-sort-amount-down-alt`} />;
            }
            return <i className={`fa fa-sort-amount-down`} />;
        }
        return <i className={`fa fa-sort-amount-down invisible`} />;
    }

    render () {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { children, onClick, current, column, currentDirection, ...rest } = this.props;
        return (<th {...rest}>
            <span className="btn btn-link" onClick={this.onClick}>{children}</span>
            {this.renderArrow()}
        </th>);
    }
}
