import CardsItem from "../Cards/CardsItem/Card";
import * as S from "./Column.styled";

export default function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.StyledCard>
        {cardList.map((card) => (
          <CardsItem
            topic={card.topic}
            title={card.title}
            date={card.date}
            key={card._id}
            id={card._id}
          />
        ))}
      </S.StyledCard>
    </div>
  );
}
