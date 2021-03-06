import Card from "../Cards";
import data from "../../utils/constants/indonesia.js";
import { nanoid } from "nanoid";
import GlobalStyled from "./Global.styled";
function Global() {
  const globals = data.indonesia;

  return (
    <GlobalStyled>
      <div className="container">
        <section className="globals">
          <h2>Indonesia</h2>
          <p>Data Covid Berdasarkan Global</p>
          <div className="global__container">
            {globals.map(function (global) {
              let id = nanoid();
              return <Card global={global} key={id} />;
            })}
          </div>
        </section>
      </div>
    </GlobalStyled>
  );
}
export default Global;