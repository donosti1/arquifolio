import React from "react";
import {Image, Stack, Text} from "@chakra-ui/react";
interface Props {
  imagenDestacada: string;
}

const UpperProyecto: React.FC<Props> = (props) => {
  //console.log(props);
  const imagenDestacada = props.imagenDestacada;

  return (
    <Image
      align="0 50%"
      boxSize="72vh"
      /*objectFit="contain"*/ src={imagenDestacada}
      width="100%"
    />
  );
};

export default UpperProyecto;
