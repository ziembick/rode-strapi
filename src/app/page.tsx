import Card from "./components/card/card";
import { iconType } from "./components/button/button";
import config from "@/config";

const fetchBlogs = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const request = await fetch(`${config.api}/api/blogs?populate=*`, reqOptions);
  const response = await request.json();

  return response
};

const Home = async () => {
  const blogs = await fetchBlogs()

  console.log('blogs', blogs.data)

  return (
    <div className="container pb-80">
      <Card
        className="mb-30"
        label="Product Review"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
        summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            similique aliquid suscipit facilis magnam deserunt quibusdam quidem
            nulla! Quia, ipsum."
        href="#"
        btnIcon={iconType.ARROW_RIGHT}
      />
      <div className="row">
        <div className="col col_4 m-mw-100">
          <Card
            label="Opinions"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            similique aliquid suscipit facilis magnam deserunt quibusdam quidem
            nulla! Quia, ipsum."
            href="#"
            btnIcon={iconType.ARROW_RIGHT}
          />
        </div>
        <div className="col col_4 m-mw-100">
          <Card
            label="Travel Guides"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            similique aliquid suscipit facilis magnam deserunt quibusdam quidem
            nulla! Quia, ipsum."
            href="#"
            btnIcon={iconType.ARROW_RIGHT}
          />
        </div>
        <div className="col col_4 m-mw-100">
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
