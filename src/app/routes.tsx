import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import VisualizerProyecto from "./screens/Visualizer/Proyectos";
import HomeScreen from "./screens/Home";
interface Props {
  imagenDestacada: string;
}
const Routes: React.FC<Props> = (props) => {
  return (
    <Switch>
      <Route exact component={HomeScreen} path="/" />
      <Route
        path="/proyectos"
        render={() => <VisualizerProyecto imagenDestacada={props.imagenDestacada} />}
      />
      <Route
        path="/gestiones"
        render={() => <VisualizerProyecto imagenDestacada={props.imagenDestacada} />}
      />
      <Route
        path="/presupuestos"
        render={() => <VisualizerProyecto imagenDestacada={props.imagenDestacada} />}
      />
      <Route
        path="/contacto"
        render={() => <VisualizerProyecto imagenDestacada={props.imagenDestacada} />}
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
