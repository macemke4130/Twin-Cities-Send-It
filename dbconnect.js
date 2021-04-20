import * as mysql from 'mysql';
import { createPool } from 'mysql';

export const pool = createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'tcsi_user',
    password: 'root',
    database: 'tcsi'
});

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {

        const sql = mysql.format(query, values);
        console.log("Query Running");
        console.log(sql);
        console.log('');

        pool.query(sql, (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

export default {
    pool,
    Query
}