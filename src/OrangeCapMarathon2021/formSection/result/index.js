import React from "react";
import { useStateMachine } from "little-state-machine";
import { Button } from "../../form-component";
import updateAction from "../../updateAction";

const Result = ({ history }) => {
  const { state } = useStateMachine(updateAction);

  const goBack = () => {
    history.push(`/orangeCapMarathon2021/step5`);
  };

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>

      <Button type="button" onClick={goBack} label="back" type="button" />
      <Button type="submit" label="ส่งใบสมัคร" />
    </div>
  );
};

export default Result;
