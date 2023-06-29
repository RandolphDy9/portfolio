const Footer = (item: { id: string }) => {
  return (
    <div className="" id={item.id}>
      <div className="primary-color mx-auto text-center mb-5 py-5">
        <div className="fs-1 fw-bold">Get In Touch.</div>
        <div className="content mt-1 mb-3 contact">
          This site showcases the ideal combination of ReactJS and Bootstrap,
          blending dynamic components with responsive design. Inspired by diverse
          portfolios, it embodies best practices and modern trends for an engaging
          user experience.
        </div>
        <button className="btn-outline fs-5" onClick={() => window.location.href="mailto:mayson.dy@gmail.com"}>
          Hit me up!
        </button>
      </div>
      <div className="secondary-color mx-auto mt-5 pt-5 text-center">
        <small>
          Designed and Developed by Randolph Dy &copy; 2023
        </small>
      </div>
    </div>
  );
};

export default Footer;
