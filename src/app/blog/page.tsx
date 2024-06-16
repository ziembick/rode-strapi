// import Card from "../components/card/card";
// import { iconType } from "../components/button/button";
// import fetchBlogs from "@/helpers/fetch-blogs";
// import config from "@/config";

// const Home = async () => {
//   const [featuredBlogs, blogs] = await Promise.all([
//     fetchBlogs("filters[IsFeatured][$eq]=true"),
//     fetchBlogs("filters[IsFeatured][$eq]=false"),
//   ]);

//   // console.log("Featured Blogs Data:", featuredBlogs.data);
//   // console.log("Blogs Data:", blogs.data);

//   return (
//     <div className="container pb-80">
//       {featuredBlogs.data.map(
//         (featuredBlog: {
//           id: any;
//           attributes: {
//             Category: any;
//             Title: any;
//             Summary: any;
//             slug: any;
//             FeaturedImage: any;
//           };
//         }) => {
//           // console.log("Featured Blog ID:", featuredBlog.id);

//           return (
//             <Card
//               label={featuredBlog.attributes.Category}
//               title={featuredBlog.attributes.Title}
//               summary={featuredBlog.attributes.Summary}
//               href={`/${featuredBlog.attributes.slug}`}
//               imgAlt="Featured Image"
//               imgSrc={`${config.api}${featuredBlog.attributes.FeaturedImage.data.attributes.url}`}
//               btnIcon={iconType.ARROW_RIGHT}
//               key={featuredBlog.id}
//             />
//           );
//         }
//       )}
//       <div className="row">
//         {blogs.data.map(
//           (blog: {
//             id: any;
//             attributes: {
//               Category: any;
//               Title: any;
//               Summary: any;
//               slug: any;
//               Thumbnail: any;
//             };
//           }) => {
//             // console.log("Blog ID:", blog.id); 

//             return (
//               <div className="col col_4 m-mw-100" key={blog.id}>
//                 <Card
//                   label={blog.attributes.Category}
//                   title={blog.attributes.Title}
//                   summary={blog.attributes.Summary}
//                   href={`/${blog.attributes.slug}`}
//                   imgAlt="Thumbnail Image"
//                   imgSrc={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
//                   btnIcon={iconType.ARROW_RIGHT}
//                 />
//               </div>
//             );
//           }
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
