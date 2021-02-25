import React from "react";
import * as F from "./formSection";
import { Switch, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { Container } from "./main.styled";

createStore({
  data: {},
});

const OrangeCapMarathon2021 = ({ match }) => {
  return (
    <Container>
      <StateMachineProvider>
        <Switch>
          <Route exact path={`${match.url}`} component={F.FormPart1} />
          <Route path={`${match.url}/step2`} component={F.FormPart2} />
          <Route path={`${match.url}/step3`} component={F.FormPart3} />
          <Route path={`${match.url}/step4`} component={F.FormPart4} />
          <Route path={`${match.url}/step5`} component={F.FormPart5} />
          <Route path={`${match.url}/result`} component={F.Result} />
        </Switch>
      </StateMachineProvider>
    </Container>
  );
};

export default OrangeCapMarathon2021;
