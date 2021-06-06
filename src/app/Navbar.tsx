import React from "react";
import {Box, Stack, Text} from "@chakra-ui/react";
import {Link, useLocation} from "react-router-dom";
interface Props {
  onSeccionClick: (e: any, seccion: any) => void;
}
interface ListLink {
  id: string;
  href: string;
  text: string;
}
const LINKS: ListLink[] = [
  {
    id: "proyectos",
    href: "/proyectos",
    text: "MODELADOS & PROYECTOS",
  },
  {
    id: "gestiones",
    href: "/gestiones",
    text: "GESTIONES & TRÁMITES",
  },
  {
    id: "presupuestos",
    href: "/presupuestos",
    text: "COTIZACIONES & CÓMPUTOS",
  },
  {
    id: "contacto",
    href: "/contacto",
    text: "ACERCA & CONTACTO",
  },
];
const Navbar: React.FC<Props> = (props) => {
  const {pathname} = useLocation();

  return (
    <Stack
      divider={<Box borderTop={1} borderTopColor="primary.500" height={0} width="35%" />}
      fontSize="xl"
      spacing={0}
    >
      {LINKS.map((link) => (
        <Link key={link.href} to={link.href} onClick={(e) => props.onSeccionClick(e, link.id)}>
          <Stack
            _hover={{color: "primary.500"}}
            color={pathname === link.href ? "primary.500" : "white"}
            paddingLeft={8}
            spacing={0}
          >
            <Text fontSize="xs" lineHeight={1.4}>
              {link.text}
            </Text>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

export default Navbar;
