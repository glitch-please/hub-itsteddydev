import { defineDb, defineTable, column } from 'astro:db';


const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text({unique: true}),
    startDate: column.date(),
  }
});

const Project = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    authorId: column.number({ references: () => Author.columns.id }),
    description: column.text(),
    address: column.text(),
    startDate: column.date(),
    sqFt: column.number(),
  }
});


// https://astro.build/db/config
export default defineDb({
  tables: {Author, Project}
});

