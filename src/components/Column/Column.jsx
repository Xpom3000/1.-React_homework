import CardsItem from "../Cards/CardsItem/CardsItem";

export default function Column({title, cardList}) {
    return (
        <div className="main__column column">
            <div className="column__title">
              <p>{title}</p>
            </div>
        <div className="cards">
          {cardList.map((card) => <CardsItem topic={card.theme} title={card.title} date={card.date} key={card.id } /> )}
            </div>
          </div>
    )
}