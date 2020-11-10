import { Box } from "@material-ui/core";
import React, { FunctionComponent } from "react";


export const Center: FunctionComponent<{}> = props => {
  return (
    <Box display="flex" justifyContent="center" alignItems="ceter" height="100%">
      <Box display="flex" alignItems="center">
        {props.children}
      </Box>
    </Box>
  )
};
