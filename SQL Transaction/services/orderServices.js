
const db = require('./db');

async function getOrders(){
    const rows = await db.query(
        `SELECT id, name, price, portion
        FROM food LIMIT 10`
    );
    console.log(rows);

    return {
        rows
    }
}

getOrders();

module.exports = {
    getOrders
};