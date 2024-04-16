import { PrismaClient } from "@prisma/client";
import usersData from "./seeds/users.json";
import adresses from "./seeds/endereco.json"

const prisma = new PrismaClient();
async function main() {
  for (const userData of usersData) {
    await prisma.cliente.create({data: userData});
  }
let i = 2;
  for(const adress of adresses){
    await prisma.endereco.create({data:{...adress, cliente_cpf:usersData[Math.floor(i/2-1)].cpf }})
    i++
  }

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
