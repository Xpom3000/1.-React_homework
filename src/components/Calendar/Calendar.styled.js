import styled from "styled-components";
import { DayPicker } from 'react-day-picker';


export const Calendaric = styled.div`
  margin-bottom: 20px;
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
`;
export const CalendarCustom = styled(DayPicker)`
    --rdp-cell-size: 30px;
    --rdp-caption-font-size: 14px;
`;

