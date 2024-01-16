import mysql from 'mysql2/promise';
import {config} from "../config/db.config.js";

class DatabaseUtil {
    static async query(sql, params) {
        const connection = await mysql.createConnection(config.database);
        const [rows,] = await connection.execute(sql, params);
        return rows;
    }
}

export default DatabaseUtil;