import "../styles/tariff.scss";

export default function Tariff(props) {
  //записываем значение класса тарифа в переменную, так как они не могут быть использованны одновременно
  const tariffClasses = `tariff-blok ${props.blueColor ? "blueColor" : ""} ${
    props.greenColor ? "greenColor" : ""
  } ${props.redColor ? "redColor" : ""} ${
    props.blackColor ? "blackColor" : ""
  }`;

  return (
    <div
      className={`tariff-container ${props.isSelected ? "selected" : ""}`}
      key={props.index}
    >
      <div className={tariffClasses}>
        <div className="tariff-name">{props.name}</div>
        <div className="tariff-price">
          <span className="tariff-price-item">{props.price}</span> руб/мес
        </div>
      </div>
      <div className="tariff-speed">до {props.speed} Мбит/сек</div>
      <div className="tariff-traffic">{props.traffic}</div>
    </div>
  );
}
