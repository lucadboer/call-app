export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2022, 1, day))))
    .map((weekDay) => {
      return weekDay[0].toUpperCase() + weekDay.substring(1) // Elevando a primeira letra para maiúscula
    })
}
