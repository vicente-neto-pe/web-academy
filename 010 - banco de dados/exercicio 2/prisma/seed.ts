import { PrismaClient } from '@prisma/client'
import usersData from './seeds/users.json'

const prisma = new PrismaClient()
async function main() {
    for (const userData of usersData) {
      const user = await prisma.cliente.create({
        data: userData
      })

}}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })