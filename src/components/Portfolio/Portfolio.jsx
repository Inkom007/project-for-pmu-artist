import s from "./Portfolio.module.css";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

const Portfolio = ({ images, visible, loadMore }) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>My portfolio</h2>
      <ul className={s.gallery}>
        {images.slice(0, visible).map((image, index) => {
          return (
            <li key={index}>
              <PortfolioItem src={image.src} alt={image.alt} />
            </li>
          );
        })}
      </ul>
      {visible < images.length && (
        <button className={s.button} onClick={loadMore}>
          More...
        </button>
      )}
    </div>
  );
};

export default Portfolio;
