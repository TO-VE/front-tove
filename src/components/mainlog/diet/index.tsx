import { state } from "constants/state";
import { Step, StyledRoot } from "./style";

const Diet = () => {
  return (
    <StyledRoot>
      <div>
        <Step color={state["Lacto Ovo"]} />
        <p>07/02</p>
      </div>
      <div>
        <Step color={state["Pesco"]} />
        <p>07/02</p>
      </div>
      <div>
        <Step color={state["Vegan"]} />
        <p>07/02</p>
      </div>

      <div>
        <Step color={state["NonVegan"]} />
        <p>07/02</p>
      </div>
      <div>
        <Step color={state["Flexitarian"]} />
        <p>07/02</p>
      </div>
      <div>
        <Step color={state["Pollo"]} />
        <p>07/02</p>
      </div>
      <div>
        <Step color={state["Lacto"]} />
        <p>07/02</p>
      </div>
    </StyledRoot>
  );
};

export default Diet;
