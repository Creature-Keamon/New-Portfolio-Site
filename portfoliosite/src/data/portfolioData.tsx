const PortfolioData = {
  buttonText: ["Old Site", "Github"],
  buttonImages: ["link", "githublogo"],
  buttonLinks: [
    "https://creature-keamon.github.io/Portfolio-Website-Old/index.html",
    "https://github.com/Creature-Keamon/New-Portfolio-Site",
  ],
  title: "MY PORTFOLIO SITE",
  subtitle: "2023/25",
  font: "",
  textColor: "",
  backgroundColor: "",
  pageData: [
    {
      imgName: "Portfoliosite.png",
      pageData: (
        <p>
          This site was built at the end of 2025 with REACT.JS and Motion.JS.
          However it was originally made back in 2023 using HTML, CSS and
          Three.JS. It houses information about me and my projects.
        </p>
      ),
    },
    {
      imgName: "PortfolioSiteOld.png",
      pageData: (
        <p>
          The original site was designed to be a hub for all of the projects
          that I worked on and was currently working on. However it was made
          with raw HTML and CSS, which made it difficult and tedious to add
          reusable elements and interesting effects, like animations. <p></p>
          This old site is viewable from the link above.
        </p>
      ),
    },
    {
      imgName: "PortfolioSiteNew.png",
      pageData: (
        <p>
          So I have remade it with React.JS and Motion.JS. As I am using React,
          I was able to make the site extremely modular, making it extremely
          easy to add new pages that conform to my desired page design, and a
          new (conformant) page can be created with only a small amount of JSX.
          <p></p> The source code is available from the Github link at the top
          of the page
        </p>
      ),
    },
  ],
};
export default PortfolioData;
