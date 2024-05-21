import Card from "./components/card/card";
import { iconType } from "./components/button/button";
import config from "@/config";

const fetchBlogs = async (params: any) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
      "Surrogate-Control": "no-store"
    },
  };
  const request = await fetch(
    `${config.api}/api/blogs?populate=*&${params}`,
    reqOptions
  );
  const response = await request.json();

  console.log(`Response for params: ${params}`, response);

  return response;
};

const Home = async () => {
  const [featuredBlogs, blogs] = await Promise.all([
    fetchBlogs("filters[IsFeatured][$eq]=true"),
    fetchBlogs("filters[IsFeatured][$eq]=false"),
  ]);

  console.log("Featured Blogs Data:", featuredBlogs.data);
  console.log("Blogs Data:", blogs.data);

  return (
    <div className="container pb-80">
      {featuredBlogs.data.map(
        (featuredBlog: {
          id: any;
          attributes: {
            Category: any;
            Title: any;
            Summary: any;
            slug: any;
            FeaturedImage: any;
          };
        }) => {
          console.log("Featured Blog ID:", featuredBlog.id); // Adicione este log

          return (
            <Card
              label={featuredBlog.attributes.Category}
              title={featuredBlog.attributes.Title}
              summary={featuredBlog.attributes.Summary}
              href={`/${featuredBlog.attributes.slug}`}
              imgAlt="Featured Image"
              imgSrc={`${config.api}${featuredBlog.attributes.FeaturedImage.data.attributes.url}`}
              btnIcon={iconType.ARROW_RIGHT}
              key={featuredBlog.id}
            />
          );
        }
      )}
      <div className="row">
        {blogs.data.map(
          (blog: {
            id: any;
            attributes: {
              Category: any;
              Title: any;
              Summary: any;
              slug: any;
              Thumbnail: any;
            };
          }) => {
            console.log("Blog ID:", blog.id); // Adicione este log

            return (
              <div className="col col_4 m-mw-100" key={blog.id}>
                <Card
                  label={blog.attributes.Category}
                  title={blog.attributes.Title}
                  summary={blog.attributes.Summary}
                  href={`/${blog.attributes.slug}`}
                  imgAlt="Thumbnail Image"
                  imgSrc={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
                  btnIcon={iconType.ARROW_RIGHT}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Home;

// import Card from "./components/card/card";
// import { iconType } from "./components/button/button";

// const Home = () => {
//   return (
//     <div className="container pb-80">
//       <Card
//         className="mb-30"
//         label="Product Review"
//         title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
//         summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
//             similique aliquid suscipit facilis magnam deserunt quibusdam quidem
//             nulla! Quia, ipsum."
//         href="#"
//         btnIcon={iconType.ARROW_RIGHT}
//       />
//       <div className="row">
//         <div className="col col_4 m-mw-100">
//           <Card
//             label="Opinions"
//             title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
//             summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
//             similique aliquid suscipit facilis magnam deserunt quibusdam quidem
//             nulla! Quia, ipsum."
//             href="#"
//             btnIcon={iconType.ARROW_RIGHT}
//           />
//         </div>
//         <div className="col col_4 m-mw-100">
//           <Card
//             label="Travel Guides"
//             title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
//             summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
//             similique aliquid suscipit facilis magnam deserunt quibusdam quidem
//             nulla! Quia, ipsum."
//             href="#"
//             btnIcon={iconType.ARROW_RIGHT}
//           />
//         </div>
//         <div className="col col_4 m-mw-100">
//           <Card
//             label="Product Review"
//             title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
//             summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
//             similique aliquid suscipit facilis magnam deserunt quibusdam quidem
//             nulla! Quia, ipsum."
//             href="#"
//             btnIcon={iconType.ARROW_RIGHT}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
