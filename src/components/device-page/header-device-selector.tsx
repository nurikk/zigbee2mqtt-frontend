import React, { CSSProperties, PropsWithChildren, forwardRef, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { Devices } from '../../store';
import { TabName } from './types';
import { WithTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

interface SearchMenuProps {
    style?: CSSProperties;
    className?: string;
    searchTerm?: string;
    setSearchTerm: (value: string) => void;
    t: TFunction;
}

interface HeaderDeviceSelectorProps {
    devices: Devices;
    dev: string;
    tab?: TabName;
    t: TFunction;
}

interface HeaderDeviceSelectorItemsProps {
    devices: Devices;
    dev: string;
    tab?: TabName;
    setSearchTerm: (value: string) => void;
}

const SearchMenu = forwardRef<HTMLDivElement, PropsWithChildren<SearchMenuProps>>(function SearchMenu(
    { children, style, className, searchTerm, setSearchTerm, t },
    ref,
) {
    return (
        <div ref={ref} style={style} className={className}>
            <Form.Control
                autoFocus
                className="mx-3 my-2 w-auto"
                placeholder={t('type_to_filter')}
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                    (child) =>
                        !searchTerm ||
                        (React.isValidElement(child) &&
                            child.props.children.toLowerCase().includes(searchTerm.toLowerCase())),
                )}
            </ul>
        </div>
    );
});

export function HeaderDeviceSelector(props: HeaderDeviceSelectorProps): JSX.Element {
    const { devices, dev, tab = 'info', t } = props;
    const [searchTerm, setSearchTerm] = useState<string>('');

    const device = devices[dev];

    return (
        <h1 className="h3">
            <Dropdown>
                <Dropdown.Toggle aria-label={t('select_a_device')} variant="" size="lg">
                    {device.friendly_name}{' '}
                </Dropdown.Toggle>

                <Dropdown.Menu as={SearchMenu} searchTerm={searchTerm} t={t} setSearchTerm={setSearchTerm}>
                    <HeaderDeviceSelectorItems devices={devices} dev={dev} tab={tab} setSearchTerm={setSearchTerm} />
                </Dropdown.Menu>
            </Dropdown>
        </h1>
    );
}

function HeaderDeviceSelectorItems({ devices, dev, tab, setSearchTerm }: HeaderDeviceSelectorItemsProps): JSX.Element {
    return (
        <>
            {Object.entries(devices).map(([id, device]) => (
                <Dropdown.Item
                    active={id === dev}
                    key={id}
                    href={`#/device/${id}/${tab}`}
                    onClick={() => setSearchTerm('')}
                >
                    {device.friendly_name}
                </Dropdown.Item>
            ))}
        </>
    );
}
