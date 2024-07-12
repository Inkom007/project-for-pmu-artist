import s from "./Portfolio.module.css";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { RiMoreLine } from "react-icons/ri";

const Portfolio = ({ images, visible, loadMore }) => {
  return (
    <div id="Portfolio" className={s.container}>
      <h2 className={s.title}>My portfolio</h2>
      <div className={s.gallery}>
        {images.slice(0, visible).map((image, index) => (
          <PortfolioItem key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      {visible < images.length && (
        <button className={s.button} onClick={loadMore}>
          <RiMoreLine size={40} color="#d7b47c" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;
