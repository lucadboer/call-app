import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Calendar } from '../../../../../components/Calendar'
import { api } from '../../../../../lib/axios'
import {
  CalendarStepContainer,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

interface Availability {
  possibleTimes: number[]
  availableTimes: number[]
}

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const router = useRouter()
  const username = String(router.query.username)

  const selectedDateWithout = dayjs(selectedDate).format('YYYY-MM-DD')

  const { data: availability } = useQuery<Availability>(
    ['availability', selectedDateWithout],
    async () => {
      const response = await api.get(`users/${username}/avaliability`, {
        params: {
          date: selectedDateWithout,
        },
      })

      return response.data
    },
    {
      enabled: !!selectedDate,
    },
  )

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
            {availability?.possibleTimes.map((hour) => {
              return (
                <TimePickerItem
                  key={hour}
                  disabled={!availability.availableTimes.includes(hour)}
                >
                  {String(hour).padStart(2, '0')}h00
                </TimePickerItem>
              )
            })}
          </TimePickerList>
        </TimePicker>
      )}
    </CalendarStepContainer>
  )
}
