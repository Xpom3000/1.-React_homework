import * as S from "./Calendar.styled"
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";

export default function Calendar({ selectedDate , setSelectedDate}) {
  let footer = <S.ChooseDate>Срок исполнения: </S.ChooseDate>;
  if (selectedDate) {
    <S.ChooseDate>
        Вы выбрали {format(selectedDate, "PP", { locale: ru })}
      </S.ChooseDate>
  }
  return (
    <S.Calendaric>
    <S.CategoriesP>Даты</S.CategoriesP>
    <S.CalendarCustom
      locale={ru}
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
    />
  </S.Calendaric>
  );
}



