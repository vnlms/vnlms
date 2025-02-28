const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        {
          name: "Frontend",
        },
        {
          name: "Backend",
        },
        {
          name: "Mobile",
        },
        {
          name: "Mobile2",
        },
        {
          name: "Mobile3",
        },
      ],
    });
    console.log("success");
    
  } catch (error) {
    console.log(error, "Error Seeding the database categories");
  } finally {
    await database.$disconnect();
  }
}
main();