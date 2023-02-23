import { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  const [selectDateTime, setSelectDateTime] = useState<Date | null>()

  function goBackCalendar() {
    setSelectDateTime(null)
  }

  if (selectDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectDateTime}
        goBackCalendar={goBackCalendar}
      />
    )
  }

  return <CalendarStep onSelectDateTime={setSelectDateTime} />
}
