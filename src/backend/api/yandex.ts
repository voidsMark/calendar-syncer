import axios from 'axios'

export const getYandexICal = async () => {
  const yandexToken = process.env.YANDEX_TOKEN ?? ''
  try {
    const response = await axios.get(`https://calendar.yandex.ru/export/ics.xml?private_token=${yandexToken}&tz_id=Asia/Yekaterinburg`)
    return response.data
  } catch (error) {
    console.error('Failed to get iCal from yandex: ', error)
  }
  return null
}
