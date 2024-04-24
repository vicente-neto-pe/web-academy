import { PrismaClient } from "@prisma/client";
import {Role} from '../src/resources/role/role.constants';

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: [
      { id: Role.ADMIN, title: "admin" },
      { id: Role.CLIENT, title: "client" },
    ],
    skipDuplicates: true,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
