
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { LastSeenType, SortColumn } from ".";
// import ActionTH from "./ActionTH";
// import style from "./style.css";

// type TableHeaderProps = {
//     sortColumn: SortColumn | SortColumn[];
//     sortDirection: SortDirection;
//     onSortChange(column: SortColumn | SortColumn[], sortDir?: SortDirection): void;
//     lastSeenType: LastSeenType;
// }
// export const TableHeader = (props: TableHeaderProps): JSX.Element => {
//     const { sortColumn, sortDirection, onSortChange, lastSeenType } = props;
//     const { t } = useTranslation(['zigbee']);
//     return (
//         <thead>
//             <tr className="text-nowrap">
//                 <th>#</th>
//                 <th>{t('pic')}</th>
//                 <ActionTH className={style["action-column"]} column="device.friendly_name"
//                     currentDirection={sortDirection} current={sortColumn}
//                     onClick={onSortChange}>{t('friendly_name')}</ActionTH>
//                 <ActionTH className={style["action-column"]} column="device.ieee_address"
//                     currentDirection={sortDirection} current={sortColumn}
//                     onClick={onSortChange}>{t('ieee_address')}</ActionTH>
//                 <ActionTH className={style["action-column"]} column="device.definition.vendor"
//                     currentDirection={sortDirection} current={sortColumn}
//                     onClick={onSortChange}>{t('manufacturer')}</ActionTH>
//                 <ActionTH className={style["action-column"]} column="device.definition.model"
//                     currentDirection={sortDirection} current={sortColumn}
//                     onClick={onSortChange}>{t('model')}</ActionTH>
//                 <ActionTH className={style["action-column"]} column="state.linkquality"
//                     currentDirection={sortDirection} current={sortColumn}
//                     onClick={onSortChange}>{t('lqi')}</ActionTH>
//                 {lastSeenType !== "disable" && <ActionTH className={style["action-column"]} column="lastSeen"
//                     currentDirection={sortDirection} current={sortColumn}
//                     onClick={onSortChange}>{t('last_seen')}</ActionTH>}
//                 <ActionTH className={style["action-column"]} column="state.battery"
//                     currentDirection={sortDirection} current={sortColumn}
//                     onClick={onSortChange}>{t('power')}</ActionTH>
//                 <th>&nbsp;</th>
//             </tr>
//         </thead>
//     )
// }
