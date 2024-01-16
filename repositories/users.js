import DatabaseUtil from "../utils/database.js";

class UsersRepo {
    static async getByUsername(username) {
        const users = await DatabaseUtil.query('SELECT * FROM USERS WHERE username = ? LIMIT 1', [username]);
        return users ? users[0] : null;
    }

    static async getById(id) {
        const users = await DatabaseUtil.query('SELECT * FROM USERS WHERE id = ? LIMIT 1', [id]);
        return users ? users[0] : null;
    }

    static async insert({id, username, email, password}) {
        return await DatabaseUtil.query('INSERT INTO USERS(id, username, email, password) VALUES (?,?,?,?)', [id, username, email, password]);
    }

    static serialize(user, done) {
        const { password, ...userOmitted } = user;
        done(null, userOmitted);
    };

    static async deserialize (user, done) {
        return done(null, user);
    };
}

export default UsersRepo;