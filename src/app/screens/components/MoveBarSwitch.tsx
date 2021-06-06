import React, {useState} from "react";
import {Stack, Image, Button, Icon} from "@chakra-ui/react";
import {AiOutlineArrowUp, AiOutlineArrowDown} from "react-icons/ai";
interface Props {
  moveBarPosition: string;
  posicionMenu: number;
  moveBarAnimationPL: string;
  moveBarAnimationPR: string;
  handleEnter: () => void;
  handleLeave: () => void;
  moveNavbar: () => void;
}
const MoveBarSwitch: React.FC<Props> = (props) => {
  return (
    <Stack
      direction="row"
      left={props.moveBarPosition}
      position="absolute"
      spacing={0}
      transition="all 1s ease-out;"
      onMouseEnter={() => props.handleEnter()}
      onMouseLeave={() => props.handleLeave()}
    >
      <Button
        borderRightRadius="9999"
        borderWidth="0"
        paddingLeft={props.moveBarAnimationPL}
        paddingRight={props.moveBarAnimationPR}
        transition="all 1s ease-out;"
        onClick={() => props.moveNavbar()}
      >
        <Icon
          as={props.posicionMenu == 0 ? AiOutlineArrowDown : AiOutlineArrowUp}
          height={6}
          width={6}
        />
      </Button>
    </Stack>
  );
};

export default MoveBarSwitch;
