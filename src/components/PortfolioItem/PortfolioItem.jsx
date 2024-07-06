import s from "./PortfolioItem.module.css";

const PortfolioItem = ({ src, alt }) => {
  return (
    <div className={s.image}>
      <img className={s.image} src={src} alt={alt} />
    </div>
  );
};

export default PortfolioItem;
