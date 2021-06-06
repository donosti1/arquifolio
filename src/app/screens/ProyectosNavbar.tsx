import React from "react";
import {Button, Grid, GridItem, Stack, Text, Image} from "@chakra-ui/react";
import {Link, useLocation, RouteComponentProps} from "react-router-dom";

interface SeriesLink {
  href: string;
  text: string;
  serieCat: string;
}
const CATEGORIAS: SeriesLink[] = [
  {
    href: "/proyectos/serie-14",
    text: "SERIE 14",
    serieCat: "serie-14",
  },
  {
    href: "/proyectos/serie-15",
    text: "SERIE 15",
    serieCat: "serie-15",
  },
  {
    href: "/proyectos/serie-16",
    text: "SERIE 16",
    serieCat: "serie-16",
  },
];

interface ListLink extends Record<string, any> {
  href: string;
  text: string;
  cat: string;
  proyid: number;
}
const PROYECTOS: ListLink[] = [
  {
    proyid: 1,
    href: "/proyectos/casa-1",
    text: "CASA 1",
    cat: "serie-14",
  },
  {
    proyid: 2,
    href: "/proyectos/casa-2",
    text: "CASA 2",
    cat: "serie-14",
  },
  {
    proyid: 3,
    href: "/proyectos/casa-5",
    text: "CASA 5",
    cat: "serie-15",
  },
  {
    proyid: 4,
    href: "/proyectos/casa-6",
    text: "CASA 6",
    cat: "serie-15",
  },
  {
    proyid: 5,
    href: "/proyectos/casa-7",
    text: "CASA 7",
    cat: "serie-16",
  },
  {
    proyid: 6,
    href: "/proyectos/casa-8",
    text: "CASA 8",
    cat: "serie-16",
  },
];

interface Props extends RouteComponentProps {
  onProyClick(e: any): any;
  onSerieClick: (e: any) => void;
  onImageClick: (e: any) => void;
  galeriaProyecto: {}[];
  serie: string;
}
const ProyectosNavbar: React.FC<Props> = (props) => {
  const {pathname} = useLocation();
  const renderGallery =
    PROYECTOS.map((proy) => proy.href).includes(pathname) &&
    Object.keys(props.galeriaProyecto[0]).length != 0
      ? PROYECTOS.filter((proy) => proy.href == pathname)[0].proyid
      : null;

  return (
    <>
      <Grid autoFlow="column" fontSize="xl" height="12vh" spacing={0} templateRows="repeat(6, 1fr)">
        {CATEGORIAS.map((catLink) => (
          <Link key={catLink.href} to={catLink.href}>
            <GridItem
              _hover={{color: "primary.500"}}
              color={pathname === catLink.href ? "primary.500" : "white"}
              paddingLeft={8}
              spacing={0}
            >
              <Text
                data-seriecat={catLink.serieCat}
                fontSize="xs"
                lineHeight={1.4}
                onClick={(e) => props.onSerieClick(e)}
              >
                {catLink.text}
              </Text>
            </GridItem>
          </Link>
        ))}
      </Grid>
      <Grid autoFlow="column" fontSize="xl" height="12vh" spacing={0} templateRows="repeat(6, 1fr)">
        {PROYECTOS.filter((proy) => proy.cat == props.serie).map((link, index) => (
          <Link key={link.href} to={link.href}>
            <GridItem
              _hover={{color: "primary.500"}}
              color={pathname === link.href ? "primary.500" : "white"}
              paddingLeft={8}
              spacing={0}
            >
              <Text
                data-proyid={link.proyid}
                fontSize="xs"
                lineHeight={1.4}
                onClick={(e) => props.onProyClick(e)}
              >
                {link.text}
              </Text>
            </GridItem>
          </Link>
        ))}
      </Grid>
      <Stack direction="row" height={12} paddingLeft={16} spacing={2}>
        {renderGallery &&
          props.galeriaProyecto.map(({id, url}) => (
            <Stack
              key={id}
              _hover={{borderColor: "secondary.500", cursor: "pointer"}}
              //borderColor={index == idSelectedPicture ? bordeImagenSelected : bordeImagen}
              borderColor="secondary.900"
              borderRadius="md"
              borderWidth={2}
              padding="1px"
            >
              <Image
                key={id}
                data-proyid={renderGallery}
                data-selectedimageid={id}
                height={12}
                objectFit="cover"
                src={url}
                width={12}
                onClick={(e) => props.onImageClick(e)}
              />
            </Stack>
          ))}
      </Stack>
    </>
  );
};

export default ProyectosNavbar;
