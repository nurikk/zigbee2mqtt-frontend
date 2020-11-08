import React, { Component, Fragment } from "react";
import { FeatureAccessMode, TextualFeature } from "../../../types";
import TextualEditor from "../../textual-editor/textual-editor";

import { BaseFeatureProps } from "../base";

type TextualProps = BaseFeatureProps<TextualFeature>
export default class Textual extends Component<TextualProps> {

  renderEditor() {
    const { feature: { endpoint, name, property }, deviceState, onChange } = this.props;
    return <TextualEditor
      onChange={(value) => onChange(endpoint, { [name]: value })}
      value={deviceState[property] as string ?? ""}
    />
  }
  renderView() {
    const { feature: { property }, deviceState } = this.props;
    return <Fragment><strong>{deviceState[property] ?? "N/A"}</strong></Fragment>
  }
  render() {
    const { feature: { access } } = this.props;
    if (access & FeatureAccessMode.ACCESS_WRITE) {
      return this.renderEditor();
    } else if (access & FeatureAccessMode.ACCESS_STATE) {
      return this.renderView();
    } else {
      return null;
    }
  }
}