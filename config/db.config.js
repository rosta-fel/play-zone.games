import 'dotenv/config';

export const config = {
    database:          {
        host:           process.env.DB_HOST,
        user:           process.env.DB_USER,
        password:       process.env.DB_PASSWORD,
        database:       process.env.DB_NAME,
        connectTimeout: 60000
    },
    listPerPage: 10,
};