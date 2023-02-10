import dayjs from 'dayjs'
import { useState } from 'react'
import { Calendar } from '../../../../../components/Calendar'
import {
  CalendarStepContainer,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isSelectedDay = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null

  const describedDay = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  return (
    <CalendarStepContainer isTimePickerOpen={isSelectedDay}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isSelectedDay && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay}, <span>{describedDay}</span>
          </TimePickerHeader>
          <TimePickerList>
            <TimePickerItem>10h00</TimePickerItem>
            <TimePickerItem>10h00</TimePickerItem>
            <TimePickerItem>10h00</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </CalendarStepContainer>
  )
}
