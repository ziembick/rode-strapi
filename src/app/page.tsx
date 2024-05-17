import Card from "./components/card/card";
import { iconType } from "./components/button/button";

const Home = () => {
  return (
    <div className="container pb-80">
      <Card
        label="Product Review"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
        summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            similique aliquid suscipit facilis magnam deserunt quibusdam quidem
            nulla! Quia, ipsum."
        href="#"
        btnIcon={iconType.ARROW_RIGHT}
      />
      <div className="row">
        <div className="col col_4">
          <Card
            label="Product Review"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            similique aliquid suscipit facilis magnam deserunt quibusdam quidem
            nulla! Quia, ipsum."
            href="#"
            btnIcon={iconType.ARROW_RIGHT}
          />
        </div>
        <div className="col col_4">
          <Card
            label="Product Review"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            similique aliquid suscipit facilis magnam deserunt quibusdam quidem
            nulla! Quia, ipsum."
            href="#"
            btnIcon={iconType.ARROW_RIGHT}
          />
        </div>
        <div className="col col_4">
          <Card
            label="Product Review"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            similique aliquid suscipit facilis magnam deserunt quibusdam quidem
            nulla! Quia, ipsum."
            href="#"
            btnIcon={iconType.ARROW_RIGHT}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
