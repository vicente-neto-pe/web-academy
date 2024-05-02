import fs from "fs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const data = fs.readFileSync("./prisma/dados-livros.txt", "utf8");
    const livros: string[] = data.split("\n\n\n");
    for (let livro of livros) {
      const [nome, isbn, sinopse, urlImagem, tempAutores] = livro.split("\n\n");
      const autores = tempAutores.split(";").map((nome) => ({ nome }));
      await prisma.livro.create({
        data: {
          nome,
          sinopse,
          isbn,
          autores: { create: autores },
          urlImagem,
        },
      });
    }

    console.log("Dados inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir dados:", error);
  } finally {
    await prisma.$disconnect();
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
