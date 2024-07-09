import s from "./PortfolioItem.module.css";

const PortfolioItem = ({ src, alt }) => {
  return (
    <div>
      <img className={s.image} src={src} alt={alt} />
    </div>
  );
};

export default PortfolioItem;
