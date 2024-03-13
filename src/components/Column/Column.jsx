import CardsItem from "../Cards/CardsItem/Card";
import * as S from "./Column.styled";

export default function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.StyledCard>
        {cardList.map((task) => (
          <CardsItem
            topic={task.topic}
            title={task.title}
            date={task.date}
            key={task._id}
            id={task._id}
          />
        ))}
      </S.StyledCard>
    </div>
  );
}
