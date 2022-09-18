export const DescriptionCard = ({ color, description }) => {
  return (
    <article className="description-card">
      <div
        style={{ backgroundColor: color }}
        className="description-card__banner"
      ></div>
      <p className="description-card__content">{description}</p>
    </article>
  );
};
