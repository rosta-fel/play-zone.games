import DatabaseUtil from "../utils/database.js";

class MessagesRepo {
    static async getByUsername(username) {
        // const users = await DatabaseUtil.query('SELECT * FROM USERS WHERE username = ? LIMIT 1', [username]);
        // return users ? users[0] : null;
    }

    static async getById(id) {
        // const users = await DatabaseUtil.query('SELECT * FROM USERS WHERE id = ? LIMIT 1', [id]);
        // return users ? users[0] : null;
    }

    static async insert(username, message, written) {
        return await DatabaseUtil.query('INSERT INTO MESSAGES(user_id, message, written) VALUES (?,?,?)', [username, message, written]);
    }
}

export default MessagesRepo;