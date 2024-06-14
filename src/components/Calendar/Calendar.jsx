import * as S from "./Calendar.styled"
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";

export default function Calendar({ selectedDate , setSelectedDate}) {
  let footer = <S.ChooseDate>Срок исполнения: </S.ChooseDate>;
  if (selectedDate) {
    <S.ChooseDate>
       Выберите срок исполнения. {format(selectedDate, "PP", { locale: ru })}
      </S.ChooseDate>
  }
  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
  }
  .my-selected:hover:not([disabled]) { 
    color: #94A6BE;
  }
  .rdp-caption, .rdp-head_cell, .rdp-day {
    color: #94A6BE;
  }
  .my-today { 
    font-weight: bold;
  }

  .rdp {
    --rdp-cell-size: 30px;
    --rdp-caption-font-size: 18px;
    --rdp-accent-color: #94A6BE;
    --rdp-background-color: #e7edff;
    --rdp-accent-color-dark: #94A6BE;
    --rdp-background-color-dark: #20202C;
    --rdp-outline: 2px solid var(--rdp-accent-color);
    --rdp-outline-selected: 3px solid var(--rdp-accent-color);
    --rdp-selected-color: #ffffff;
  }

  .rdp-caption {
    font-size: 18px;
    font-family: Roboto;
  }

  .rdp-head_cell {
    font-size: 14px;
    text-transform: lowercase;
  }

  .rdp-cell, .rdp-day {
    font-size: 12px;
  }
`;

  return (
    <>
    <style>{css}</style>
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
      </>
  );
}



