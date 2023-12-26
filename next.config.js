/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
        ],
      },
      experimental: {
        taint: true
      },
      // exportPathMap: async function (defaultPathMap) {
  
      //   const path = await client
      //     // get all the posts and return those with slugs
      //     .fetch('*[_type == "post"].slug.current')
      //     .then(data =>
      //       // use reduce to build an object with routes
      //       // and select the blog.js file, and send in the
      //       // correct query paramater.
      //       data.reduce(
      //         (acc, slug) => ({
      //           '/': { page: '/' },
      //           ...acc,
      //           [`/blog/${slug}`]: { page: '/blog', query: { slug } }
      //         }),
      //         {}
      //       )
      //     )
      //     .catch(console.error)
      //   return path
      // }
}

module.exports = nextConfig
