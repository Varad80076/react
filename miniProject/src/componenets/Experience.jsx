
const Experience = () => {
  const blogPosts = [
    {
      id: 1,
      imgSrc: "/src/assets/images/project-3.jpg",
      alt: "Design conferences in 2022",
      category: "Design",
      date: "2022-02-23",
      title: "Design conferences in 2022",
      text: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    },
    {
      id: 2,
      imgSrc: "/src/assets/images/project-3.jpg",
      alt: "Best fonts every designer",
      category: "Design",
      date: "2022-02-23",
      title: "Best fonts every designer",
      text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
    },
    {
      id: 3,
      imgSrc: "/src/assets/images/project-3.jpg",
      alt: "Design digest #80",
      category: "Design",
      date: "2022-02-23",
      title: "Design digest #80",
      text: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
    },
    {
      id: 4,
      imgSrc: "/src/assets/images/project-3.jpg",
      alt: "UI interactions of the week",
      category: "Design",
      date: "2022-02-23",
      title: "UI interactions of the week",
      text: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
    },
    {
      id: 5,
      imgSrc: "/src/assets/images/project-3.jpg",
      alt: "The forgotten art of spacing",
      category: "Design",
      date: "2022-02-23",
      title: "The forgotten art of spacing",
      text: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      imgSrc: "/src/assets/images/project-3.jpg",
      alt: "Design digest #79",
      category: "Design",
      date: "2022-02-23",
      title: "Design digest #79",
      text: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
    },
  ];

  return (
    <article className="blog " data-page="blog">
      <header>
        <h2 className="text-3xl text-white border-b-4 mb-4 p-2 border-[#af862c] flex  justify-start font-bold transition-transform duration-300 w-fit">Experience</h2>
      </header>

      <section className="blog-posts">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 bg-[#212122]  ">
          {blogPosts.map((post) => (
            <li key={post.id} className="blog-post-item">
              <a href="#" className="block  rounded-lg overflow-hidden  hover:shadow-lg transition-shadow h-full shadow-[0.2px_0.2px_5px_2px_black,-0.8px_-0.8px_5px_0px_white] ">
                <figure className="project-img  relative hover:scale-110 transition-transform duration-100">
                  <img
                    src={post.imgSrc}
                    alt={post.alt}
                    loading="lazy"
                    className="w-full rounded-xl h-48 object-cover  text-white"
                  />
                </figure>
                <div className="p-4">
                  <div className="blog-meta flex items-center text-sm text-white mb-2">
                    <p className="mr-2 font-medium text-gray-300 text-start">{post.category}</p>
                    <span className="dot w-1 h-1 bg-gray-400 rounded-full mx-2 "></span>
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-start">{post.title}</h3>
                  <p className="text-gray-300 text-sm text-start">{post.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Experience;
