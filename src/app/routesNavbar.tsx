import React from "react";
import {Switch, Route, Redirect, RouteComponentProps, withRouter} from "react-router-dom";

import ProyectosNavbar from "./screens/ProyectosNavbar";
import UnderConstruction from "./screens/UnderConstruction";
interface Props extends RouteComponentProps {
  onProyClick(e: any): any;
  onSerieClick: (e: any) => void;
  onImageClick: (e: any) => void;
  galeriaProyecto: {}[];
  serie: string;
}
const RoutesNavbar: React.FC<Props> = (props) => {
  return (
    <Switch>
      <Route exact path="/gestiones" render={() => <UnderConstruction />} />
      <Route exact path="/presupuestos" render={() => <UnderConstruction />} />
      <Route exact path="/contacto" render={() => <UnderConstruction />} />
      <Route
        path="/proyectos"
        render={() => (
          <ProyectosNavbar
            {...props}
            galeriaProyecto={props.galeriaProyecto}
            serie={props.serie}
            onImageClick={(e: any) => props.onImageClick(e)}
            onProyClick={(e) => props.onProyClick(e)}
            onSerieClick={(e: any) => props.onSerieClick(e)}
          />
        )}
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default withRouter(RoutesNavbar);
