export const fixYandexICal = (iCal: string) => {
  const fixedCalendar = iCal.replace('TRANSP:OPAQUE', 'TRANSP:TRANSPARENT')
  return fixedCalendar
}
