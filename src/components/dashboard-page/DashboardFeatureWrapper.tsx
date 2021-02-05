import camelCase from "lodash/camelCase";
import startCase from "lodash/startCase";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { FeatureAccessMode } from "../../types";
import { FetatureWrapperProps } from "../features/composite/FeatureWrapper";
import styles from "./DashboardFeatureWrapper.scss";


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

export const DashboardFeatureWrapper: FunctionComponent<PropsWithChildren<FetatureWrapperProps>> = (props) => {
    const { children, feature, onRead, deviceState={} } = props;
    const isColor = feature.name?.startsWith("color_"); //hardcode for color
    const isReadable = (feature.access & FeatureAccessMode.ACCESS_READ) || isColor;
    // const { feature, deviceState } = props;
    const icon = getGenericFeatureIcon(feature.name, deviceState[feature.property]);

    return <div className={styles.entity}>
        {icon && <div className={styles.icon}>
            <i className={`fa fa-fw ${icon}`} />
        </div>}
        <div className={styles.title}>{startCase(camelCase(feature.name))}</div>
        <div className={styles.value}>{children}</div>
    </div>
    // return <div className="row border-bottom pt-1" >
    //   <div className="col-12 col-md-3">
    //     <label className="col-form-label w-100">
    //       <div className="d-flex justify-content-between">
    //         <strong title={JSON.stringify(feature)}>{feature.name}</strong>
    //         {isReadable ? (
    //           <Button<CompositeFeature | GenericExposedFeature> item={feature} onClick={(item) => {
    //             onRead(feature.endpoint as Endpoint, { [item.property]: "" })
    //           }} className="btn btn-primary btn-sm"><i className="fa fa-sync"></i></Button>
    //         ) : null}
    //       </div>
    //       {feature.description ? <small className="d-block text-muted">{feature.description}</small> : null}
    //     </label>
    //   </div>
    //   <div className="col-12 col-md-9 d-flex align-items-center">
    //     {children}
    //   </div>
    // </div>
}

