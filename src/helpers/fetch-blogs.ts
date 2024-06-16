// import config from "@/config";

// const fetchBlogs = async (params: any) => {
//   const reqOptions = {
//     headers: {
//       Authorization: `Bearer ${process.env.API_TOKEN}`,
//       "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
//       Pragma: "no-cache",
//       Expires: "0",
//       "Surrogate-Control": "no-store",
//     },
//   };
//   const request = await fetch(
//     `${config.api}/api/blogs?populate=*&${params}&_=${new Date().getTime()}`,
//     reqOptions
//   );
//   const response = await request.json();

//   // console.log(`Response for params: ${params}`, response);

//   return response;
// };

// export default fetchBlogs;
