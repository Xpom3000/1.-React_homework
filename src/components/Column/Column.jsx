import CardsItem from "../Cards/CardsItem/CardsItem";
import *as S from "./Column.styled";

export default function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.StyledCard>
        {cardList.map((card) => (
          <CardsItem
            topic={card.theme}
            title={card.title}
            date={card.date}
            key={card.id}
          />
        ))}
      </S.StyledCard>
    </div>
  );
}
