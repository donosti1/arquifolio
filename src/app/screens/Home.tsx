import React from "react";
import {Image} from "@chakra-ui/react";

import backgroundHome from "../../assets/backgroundHome.jpg";

const HomeScreen: React.FC = () => {
  return <Image align="0 80%" boxSize="72vh" objectFit="cover" src={backgroundHome} width="100%" />;
};

export default HomeScreen;
