const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const roles = [
  {
    name: 'Admin'
  },
  {
    name: 'User'
  }
]

async function main() {
  console.log(`Start seeding ...`);
  for (const r of roles) {
    const role = await prisma.role.create({
      data: r,
    });
    console.log(`Created role with id: ${role.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
});