import { FastifyInstance } from 'fastify'
import { getYandexICal } from '@/backend/api/yandex'
import { fixYandexICal } from '@/backend/utils/ical'

export default async (fastify: FastifyInstance) => {
  /** Get iCal from yandex calendar */
  fastify.get('/yandex/calendar.ics', async (req, reply) => {
    const iCal = await getYandexICal()
    const fixedICal = fixYandexICal(iCal)

    return fixedICal
  })
}
