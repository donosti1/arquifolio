import React, {useState} from "react";
import {Container, Stack, Image, Button, Icon} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {AiOutlineArrowUp, AiOutlineArrowDown} from "react-icons/ai";

import Logo from "../assets/logo.png";
import backgroundHome from "../assets/backgroundHome.jpg";

import Routes from "./routes";
import RoutesNavbar from "./routesNavbar";
import Navbar from "./Navbar";
import MoveBarSwitch from "./screens/components/MoveBarSwitch";

const App: React.FC = () => {
  const [moveBarPosition, setMoveBarPosition] = useState("-40px");
  const [posicionMenu, setPosicionMenu] = useState(0);
  const [moveBarAnimationPL, setMoveBarAnimationPL] = useState("12");
  const [moveBarAnimationPR, setMoveBarAnimationPR] = useState("2");
  const [serie, setSerie] = useState("serie-14");
  const [galeriaProyecto, setGaleriaProyecto] = useState([{}]);
  const [imagenDestacada, setImagenDestacada] = useState(backgroundHome);
  const handleSerieClick = (e: any) => {
    setSerie(e.target.dataset.seriecat);
    setImagenDestacada(
      ImgsCategorias.filter((imag: any) => imag.serie == e.target.dataset.seriecat)
        .map((imag) => imag.imgSrc)
        .join(),
    );
  };

  const handleProyClick = (e: any) => {
    setImagenDestacada(
      ImgsProyectos.filter((imag: any) => imag.proyId == e.target.dataset.proyid)[0]
        .imgSrcDestacada,
    );
    const galeria_proyecto: ProyPicture[] = ImgsProyectos.filter(
      (imag: any) => imag.proyId == e.target.dataset.proyid,
    ).map((imgs) => imgs.pictures)[0];

    setGaleriaProyecto(galeria_proyecto);
  };

  const handleImageClick = (e: any) => {
    const imagenDestacadaProyecto = ImgsProyectos.filter(
      (imag: any) => imag.proyId == e.target.dataset.proyid,
    )[0]
      .pictures.filter((pict) => pict.id == e.target.dataset.selectedimageid)
      .map((selectedPic) => selectedPic.url)
      .join();

    setImagenDestacada(imagenDestacadaProyecto);
  };

  const handleSeccionesClick = (e: any, seccion: string) => {
    //if (seccion == "proyectos") return false;
    const imagenDestacadaSeccion = ImgsSecciones.filter((imag: any) => imag.seccion == seccion)
      .map((imag) => imag.imgSrc)
      .join();

    setImagenDestacada(imagenDestacadaSeccion);
  };

  const moveNavbar = () => {
    posicionMenu == 0 ? setPosicionMenu(1) : setPosicionMenu(0);
    setMoveBarPosition("-40px");
    setMoveBarAnimationPL("12");
    setMoveBarAnimationPR("2");
  };

  const handleEnterMoveNavbar = () => {
    setMoveBarPosition("0px");
    setMoveBarAnimationPL("6");
    setMoveBarAnimationPR("8");
  };

  const handleLeaveMoveNavbar = () => {
    setMoveBarPosition("-40px");
    setMoveBarAnimationPL("12");
    setMoveBarAnimationPR("2");
  };

  return (
    <Stack
      backgroundColor="secondary.900"
      justifyContent="space-between"
      minHeight="100vh"
      overflow="hidden"
      paddingX={0}
      spacing={0}
    >
      <Stack height="28vh" justifyContent="center" order={posicionMenu} spacing={0}>
        <Container maxWidth="container.xl" paddingX={0}>
          <Stack direction="row" spacing={0}>
            <Stack alignContent="baseline" direction="row" spacing={0}>
              <Link to="/">
                <Image src={Logo} />
              </Link>
              <Stack paddingLeft={8} width={180}>
                <Navbar onSeccionClick={(e: any, seccion) => handleSeccionesClick(e, seccion)} />
              </Stack>
            </Stack>
            <Stack direction="row" flex="1" spacing={0}>
              <RoutesNavbar
                galeriaProyecto={galeriaProyecto}
                serie={serie}
                onImageClick={(e: any) => handleImageClick(e)}
                onProyClick={(e: any) => handleProyClick(e)}
                onSerieClick={(e: any) => handleSerieClick(e)}
              />
            </Stack>
          </Stack>
        </Container>
        <MoveBarSwitch
          handleEnter={() => handleEnterMoveNavbar()}
          handleLeave={() => handleLeaveMoveNavbar()}
          moveBarAnimationPL={moveBarAnimationPL}
          moveBarAnimationPR={moveBarAnimationPR}
          moveBarPosition={moveBarPosition}
          moveNavbar={() => moveNavbar()}
          posicionMenu={posicionMenu}
        />
      </Stack>

      <Stack>
        <Routes imagenDestacada={imagenDestacada} />
      </Stack>
    </Stack>
  );
};

interface ImagenesProyectos extends Record<string, any> {
  proyId: number;
  imgSrcDestacada: string;
  pictures: ProyPicture[];
}
interface ProyPicture extends Record<string, any> {
  id: number;
  url: string;
}
const ImgsProyectos: ImagenesProyectos[] = [
  {
    proyId: 1,
    imgSrcDestacada:
      "https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg",
    pictures: [
      {
        id: 0,
        url:
          "https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg",
      },
      {
        id: 1,
        url:
          "https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg",
      },
      {
        id: 2,
        url:
          "https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",
      },
      {
        id: 3,
        url:
          "https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg",
      },
    ],
  },
  {
    proyId: 2,
    imgSrcDestacada:
      "https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg",
    pictures: [
      {
        id: 0,
        url:
          "https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg",
      },
      {
        id: 1,
        url:
          "https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg",
      },
      {
        id: 2,
        url:
          "https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",
      },
      {
        id: 3,
        url:
          "https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg",
      },
    ],
  },
  {
    proyId: 3,
    imgSrcDestacada:
      "https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",
    pictures: [
      {
        id: 0,
        url:
          "https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",
      },
      {
        id: 1,
        url:
          "https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg",
      },
      {
        id: 2,
        url:
          "https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg",
      },
      {
        id: 3,
        url:
          "https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg",
      },
    ],
  },
  {
    proyId: 4,
    imgSrcDestacada:
      "https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg",
    pictures: [
      {
        id: 0,
        url:
          "https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg",
      },
      {
        id: 1,
        url:
          "https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg",
      },
      {
        id: 2,
        url:
          "https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",
      },
      {
        id: 3,
        url:
          "https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg",
      },
    ],
  },
  {
    proyId: 5,
    imgSrcDestacada:
      "https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg",
    pictures: [
      {
        id: 0,
        url:
          "https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg",
      },
      {
        id: 1,
        url:
          "https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg",
      },
      {
        id: 2,
        url:
          "https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",
      },
      {
        id: 3,
        url:
          "https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg",
      },
    ],
  },
  {
    proyId: 6,
    imgSrcDestacada:
      "https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",
    pictures: [
      {
        id: 0,
        url:
          "https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",
      },
      {
        id: 1,
        url:
          "https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg",
      },
      {
        id: 2,
        url:
          "https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg",
      },
      {
        id: 3,
        url:
          "https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg",
      },
    ],
  },
];

const ImgsCategorias = [
  {
    serie: "serie-14",
    imgSrc:
      "https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg",
  },
  {
    serie: "serie-15",
    imgSrc:
      "https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",
  },
  {
    serie: "serie-16",
    imgSrc:
      "https://image.shutterstock.com/image-illustration/red-suv-car-3d-render-600w-584706703.jpg",
  },
];

const ImgsSecciones = [
  {
    seccion: "presupuestos",
    imgSrc:
      "https://image.shutterstock.com/image-photo/construction-theme-level-ruler-calculator-600w-399042244.jpg",
  },
  {
    seccion: "gestiones",
    imgSrc:
      "https://image.shutterstock.com/image-photo/aerial-view-construction-worker-site-600w-1006180303.jpg",
  },
  {
    seccion: "contacto",
    imgSrc:
      "https://image.shutterstock.com/image-photo/architectural-office-desk-background-construction-600w-383356447.jpg",
  },
  {
    seccion: "proyectos",
    imgSrc:
      "https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",
  },
];

export default App;
