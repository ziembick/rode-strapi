import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/card/card";

const Home = () => {
  return (
    <div className="container pb-80">
      <Card />
      <div className="row">
        <div className="col col_4">
          <Card />
        </div>
        <div className="col col_4">
          <Card />
        </div>
        <div className="col col_4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
