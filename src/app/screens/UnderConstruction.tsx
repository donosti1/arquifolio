import React from "react";
import {Button, Grid, GridItem, Stack, Text, Image} from "@chakra-ui/react";
import {Link, useLocation, RouteComponentProps} from "react-router-dom";

const UnderConstruction: React.FC = () => {
  return (
    <>
      <Stack flex="1" justifyContent="center">
        <Text align="center" color="secondary.300">
          En construcción
        </Text>
      </Stack>
    </>
  );
};

export default UnderConstruction;
