import { Calendar } from '../../../../../components/Calendar'
import {
  CalendarStepContainer,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

export function CalendarStep() {
  const isSelectedDay = true

  return (
    <CalendarStepContainer isTimePickerOpen={isSelectedDay}>
      <Calendar />

      {isSelectedDay && (
        <TimePicker>
          <TimePickerHeader>
            terça-feira, <span>20 de setembro</span>
          </TimePickerHeader>
          <TimePickerList>
            <TimePickerItem>10h00</TimePickerItem>
            <TimePickerItem>10h00</TimePickerItem>
            <TimePickerItem>10h00</TimePickerItem>
            <TimePickerItem>10h00</TimePickerItem>
            <TimePickerItem>10h00</TimePickerItem>
            <TimePickerItem>10h00</TimePickerItem>
            <TimePickerItem>10h00</TimePickerItem>
            <TimePickerItem>10h00</TimePickerItem>
            <TimePickerItem>10h00</TimePickerItem>
            <TimePickerItem>10h00</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </CalendarStepContainer>
  )
}
