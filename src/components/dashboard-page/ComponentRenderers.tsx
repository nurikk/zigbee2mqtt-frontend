import React from 'react';
import { GenericExposedFeature } from '../../types';
import startCase from 'lodash/startCase';
import camelCase from 'lodash/camelCase';
import { BaseFeatureProps, BaseViewer } from '../features/base';

import styles from './DashboardDevice.scss';

export const WaterLeak = ({ deviceState }) => {
  const { water_leak: waterLeak } = deviceState;
  return (
    <div className={styles.entity}>
      <div className={styles.icon}>
        <i className={`fa fa-fw fa-water ${waterLeak ? 'text-primary' : ''}`} />
      </div>
      <div className={styles.title}>
        Water Leak
                  {waterLeak ? <i className="fa fa-fw fa-exclamation-triangle text-danger" /> : null}
      </div>
      <div className={styles.value}>{waterLeak ? 'Detected' : 'Clear'}</div>
    </div>
  );
};



const getTemperatureIcon = (temperature: number) => {
  let icon = 'fa-thermometer-empty';
  if (temperature >= 30) {
    icon = 'fa-thermometer-full';
  } else if (temperature >= 25) {
    icon = 'fa-thermometer-three-quarters';
  } else if (temperature >= 20) {
    icon = 'fa-thermometer-half';
  } else if (temperature >= 15) {
    icon = 'fa-thermometer-quarter';
  }
  return icon;
};



const typeToClassMap = {
  humidity: ['text-info', 'fa-tint']
};
const getGenericFeatureIcon = (name: string, value: unknown): string => {
  let classes = [] as string[];
  switch (name) {
    case 'temperature':
      classes.push(getTemperatureIcon(value as number));
      classes.push('text-danger');
      break;
    case 'contact':
      if (value) {
        classes.push('fa-door-closed text-muted')
      } else {
        classes.push('fa-door-open text-primary');
      }
      break;
    case 'occupancy':
      classes.push('fa-walking');
      if (value) {
        classes.push('text-warning');
      }
      break;

    case 'water_leak':
      classes.push('fa-water');
      if (value) {
        classes.push('text-primary');
      }
      break;
    default:
      classes = [...classes, ...(typeToClassMap[name] ?? [])];
      break;
  }
  if (!classes.length) {
    classes.push('invisible');
  }
  return classes.join(' ');
}
export const GenericDashboardFeatureRenderer: React.FC<BaseFeatureProps<GenericExposedFeature>> = (props) => {
  const { feature, deviceState } = props;
  const icon = getGenericFeatureIcon(feature.name, deviceState[feature.property]);
  return (
    <div className={styles.entity}>
      {icon && <div className={styles.icon}>
        <i className={`fa fa-fw ${icon}`} />
      </div>}
      <div className={styles.title}>{startCase(camelCase(feature.name))}</div>
      <div className={styles.value}><BaseViewer {...props} /></div>
    </div>
  );
};



// export const Switch: React.FC<BaseFeatureProps<BinaryFeature>> = (props) => {
//   const { deviceState, onChange, feature } = props;
//   const { state, power } = deviceState;
//   return (
//     <div className={styles.entity}>
//       <div className={styles.icon}>
//         <i className={`fa fa-fw fa-bolt ${state === 'ON' ? 'text-warning' : 'text-muted'}`} />
//       </div>
//       <div className={styles.title}>{state === 'ON' ? <>{power} W</> : <>Off</>}</div>
//       <div className={styles.value}>
//         <Binary {...props} />
//       </div>
//     </div>
//   );
// };

// export const Thermostat = ({ deviceState }) => {
//   const {
//     local_temperature: localTemp = 0,
//     current_heating_setpoint: currentHeatingSetPoint = 0,
//     running_state: runningstate,
//     system_mode: systemMode,
//   } = deviceState;
//   return (
//     <>
//       <div className={styles.entity}>
//         <div className={styles.icon}>
//           <i className="fa fa-fw fa-fire-alt text-warning" />
//         </div>
//         <div className={styles.title}>
//           Set ({systemMode}/{runningstate})
//                   </div>
//         <div className={styles.value}>{currentHeatingSetPoint} °C</div>
//       </div>
//       <div className={styles.entity}>
//         <div className={styles.icon}>
//           <i className={`fa fa-fw ${getTemperatureIcon(localTemp as number)} text-danger`} />
//         </div>
//         <div className={styles.title}>Room</div>
//         <div className={styles.value}>{localTemp} °C</div>
//       </div>
//     </>
//   );
// };