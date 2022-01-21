module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/perks",
        destination: "http://localhost:3012/perks",
      },
      {
        source: "/perks/:path*",
        destination: "http://localhost:3012/perks/:path*",
      },
    ]
  },
}
