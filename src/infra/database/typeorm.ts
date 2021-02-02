import { createConnection } from "typeorm"

export const databaseConnect = async () => {
    const connection = await createConnection();
    console.log(`⚡️[node-clean] database succesfully connected on: ${connection.options.database}`)
    process.on('SIGINT', () => {
        connection.close().then(() => console.log('⚡️[node-clean] database connection closed'));
    });
}