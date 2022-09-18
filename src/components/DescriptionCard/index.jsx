export const DescriptionCard = ({ color, description }) => {
  return (
    <article className="description-card" draggable="true">
      <div
        style={{ backgroundColor: color }}
        className="description-card__banner"
      ></div>
      <p className="description-card__content">{description}</p>
    </article>
  );
};
