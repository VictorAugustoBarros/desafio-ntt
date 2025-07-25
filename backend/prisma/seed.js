import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function main() {
  const dataPath = path.resolve(__dirname, 'seed.json');
  const jsonData = await fs.readFile(dataPath, 'utf-8');
  const seedData = JSON.parse(jsonData);

  const categoryMap = {};

  for (const cat of seedData.categorias) {
    let category = await prisma.categoria.findFirst({
      where: { name: cat.name },
    });

    if (!category) {
      category = await prisma.categoria.create({
        data: { name: cat.name },
      });
    }

    categoryMap[cat.name] = category.id;
  }

  for (const prod of seedData.produtos) {
    const product = await prisma.produto.findFirst({
      where: { name: prod.name },
    });

    if (!product) {
      await prisma.produto.create({
        data: {
          name: prod.name,
          description: prod.description,
          price: prod.price,
          categoryId: categoryMap[prod.category],
        },
      });
    }
  }

  console.log('Seed concluída!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
