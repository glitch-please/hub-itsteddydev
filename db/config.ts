import { defineDb, defineTable, column } from 'astro:db';



const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true}),
    name: column.text(),
    email: column.text({unique: true}),
    phone: column.number(),
    created: column.date({default:new Date()}),
    role: column.text({default: 'Client'}), // Client, Admin, Staff
  }
});

const Project = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true}),
    authorId: column.number({ references: () => User.columns.id }),
    description: column.text({multiline: true}),
    address: column.text(),
    created: column.date({default:new Date()}),
    sqFt: column.number({default:0}),
    newConstruction: column.boolean(), // true / false
    status: column.number(),  // Numerical Ref 
  }
});

const Files = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true}),
    projectId: column.number({ references: () => Project.columns.id }), // all files are attached to a project
    authorId: column.number({ references: () => User.columns.id }),
    name: column.text(),
    type: column.number(), // Numerical Ref 1: Affidavit, 2: Narrative, 3: Calculations, etc etc
    fileName: column.text(), // Original filename
    filePath: column.text(), // Storage path/URL
    fileType: column.text(), // PDF, DOC, etc.
    fileSize: column.number(), // Size in bytes
    uploadedAt: column.date({default: new Date()}),
    status: column.text({default: 'active'}), // active, archived, deleted
  }
})


// https://astro.build/db/config
export default defineDb({
  tables: {User, Project, Files}
});

