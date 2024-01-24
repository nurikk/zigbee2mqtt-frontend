import React, { Component } from 'react';
import { CompositeFeature, Endpoint, FeatureAccessMode, GenericExposedFeature, ListFeature } from '../../../types';
import RangeListEditor from '../../range-list-editor/range-list-editor';
import { BaseFeatureProps, BaseViewer, NoAccessError } from '../base';
import ListEditor from '../list-editor';
import Button from '../../button';
import cx from 'classnames';
import { WithTranslation, withTranslation } from 'react-i18next';

interface State {
    value: any[];
}

type Props = BaseFeatureProps<ListFeature> & {
    parentFeatures: (CompositeFeature | GenericExposedFeature)[];
} & WithTranslation<'list'>;

class List extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const { deviceState, feature } = this.props;
        const { property } = feature;
        const value = property ? ((deviceState[property] ?? []) as any[]) : [];
        this.state = { value };
    }

    onChange = (value: any[]): void => {
        const { endpoint, property } = this.props.feature;
        this.setState({ value });
        if (!this.isListRoot()) {
            this.props.onChange(endpoint as Endpoint, property ? { [property]: value } : value);
        }
    };

    onApply = () => {
        const { value } = this.state;
        const { endpoint, property } = this.props.feature;
        this.props.onChange(endpoint as Endpoint, property ? { [property]: value } : value);
    };

    isListRoot = (): boolean => {
        const { parentFeatures } = this.props;
        return (
            parentFeatures !== undefined &&
            (parentFeatures.length === 1 ||
                // When parent is e.g. climate
                (parentFeatures.length === 2 && ![undefined, 'composite', 'list'].includes(parentFeatures[1].type)))
        );
    };

    render(): JSX.Element | JSX.Element[] {
        const { feature, minimal, parentFeatures, t } = this.props;
        const { access = FeatureAccessMode.ACCESS_WRITE, item_type: itemType } = feature;
        if (access & FeatureAccessMode.ACCESS_WRITE) {
            if (itemType == 'number') {
                return <RangeListEditor onChange={this.onChange} value={this.state.value} minimal={minimal} />;
            } else {
                const result = [
                    <ListEditor
                        key="1"
                        feature={itemType}
                        parentFeatures={[...parentFeatures, feature]}
                        onChange={this.onChange}
                        value={this.state.value}
                    />,
                ];

                if (this.isListRoot()) {
                    result.push(
                        <div key="2">
                            <Button
                                className={cx('btn btn-primary float-end', { 'btn-sm': minimal })}
                                onClick={this.onApply}
                            >
                                {t('common:apply')}
                            </Button>
                        </div>,
                    );
                }

                return result;
            }
        } else if (access & FeatureAccessMode.ACCESS_STATE) {
            return <BaseViewer {...this.props} />;
        } else {
            return <NoAccessError {...this.props} />;
        }
    }
}

export default withTranslation(['list', 'common'])(React.memo(List));
