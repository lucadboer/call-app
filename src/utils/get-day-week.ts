interface WeekDaysProps {
  short?: boolean
}

export function getWeekDays({ short = false }: WeekDaysProps = {}) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2022, 1, day))))
    .map((weekDay) => {
      if (!short) {
        return weekDay[0].toUpperCase() + weekDay.substring(1) // Elevando a primeira letra para maiúscula
      }

      return weekDay.substring(0, 3).toUpperCase()
    })
}
