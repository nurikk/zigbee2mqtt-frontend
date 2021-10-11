import React, { FunctionComponent } from "react";
import { Endpoint, FeatureAccessMode, TextualFeature } from "../../../types";
import TextualEditor from "../../textual-editor/textual-editor";

import { BaseFeatureProps, BaseViewer, NoAccessError } from "../base";

type TextualProps = BaseFeatureProps<TextualFeature>;

const Textual: FunctionComponent<TextualProps> = (props) => {
  const { feature: { access = FeatureAccessMode.ACCESS_WRITE, endpoint, name, property }, deviceState, onChange } = props;
  if (access & FeatureAccessMode.ACCESS_WRITE) {
    return <TextualEditor
      onChange={(value) => onChange(endpoint as Endpoint, { [name]: value })}
      value={deviceState[property] as string ?? ""}
    />
  } else if (access & FeatureAccessMode.ACCESS_STATE) {
    return <BaseViewer {...props} />
  } else {
    return <NoAccessError {...props} />
  }
}
export default Textual;