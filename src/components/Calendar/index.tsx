import { CaretLeft, CaretRight } from 'phosphor-react'
import { getWeekDays } from '../../utils/get-day-week'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

export function Calendar() {
  const weekDays = getWeekDays({ short: true })

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Setembro <span>2022</span>
        </CalendarTitle>
        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>
      <CalendarBody>
        <table>
          <thead>
            <tr>
              {weekDays.map((weekDay) => {
                return <th key={weekDay}>{weekDay}.</th>
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <CalendarDay>1</CalendarDay>
              </td>
              <td>
                <CalendarDay>1</CalendarDay>
              </td>
              <td>
                <CalendarDay>1</CalendarDay>
              </td>
            </tr>
          </tbody>
        </table>
      </CalendarBody>
    </CalendarContainer>
  )
}
