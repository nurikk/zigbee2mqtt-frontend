import React from 'react';
import { useAsyncDebounce } from 'react-table';
import { useTranslation } from 'react-i18next';

type GlobalFilterProps = {
    globalFilter: string;
    setGlobalFilter(arg1: string): void;
};

export function GlobalFilter({ globalFilter, setGlobalFilter }: Readonly<GlobalFilterProps>) {
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((v) => {
        setGlobalFilter(v);
    }, 200);

    const { t } = useTranslation(['common']);
    const clearInput = () => {
        setValue('');
        setGlobalFilter('');
    };

    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={t('common:enter_search_criteria')}
            />
            <button className="btn btn-outline-secondary" type="button" onClick={clearInput}>
                <i className="fa fa-times"></i>
            </button>
        </div>
    );
}
