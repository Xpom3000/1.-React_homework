import styled from "styled-components";
import { DayPicker } from "react-day-picker";

export const Calendaric = styled.div`
  /* margin-bottom: 20px; */
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94a6be;
  letter-spacing: -0.14px;
`;
export const CategoriesP = styled.p`
  margin-bottom: 14px;
  margin-left: 20px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;
export const ChooseDate = styled.p`
  margin-left: 7px;
  margin-top: 10px;
  color: #94A6BE;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  /* Срок исполнения: 09.10.23. */
  /* position: static;
  width: 129px;
  height: 12px; */
  /* Автолейаут */
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;

  /* Inside Auto Layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 14px 0px;
`;
export const CalendarCustom = styled(DayPicker)`

  --rdp-cell-size: 30px;
  --rdp-caption-font-size: 14px;
`;

