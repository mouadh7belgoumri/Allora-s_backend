import mysql from 'mysql2/promise'

const connectionData = {
    host: 'localhost',
    user: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'products'
}

async function getProducts(connectObj) {
    let connection;
    try {

        connection = await mysql.createConnection(connectObj);


        const [rows] = await connection.execute('SELECT * FROM products');



        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    } finally {

        if (connection) {
            await connection.end();
            console.log('Connection closed');
        }
    }
}

async function getProduct(connectObj, id) {
    const connection = await mysql.createConnection(connectObj);
    try {
        await connection.connect();
        const row = await connection.execute(`SELECT * FROM products WHERE id = ${id}`)
        return row;
    } catch (error) {
        console.error("failed to get product", error);
    }
    finally {
        if (connection) {
            connection.end();
        }
    }
}
async function addProduct(connectObj, req) {
    const connection = await mysql.createConnection(connectObj);
    try {
        await connection.connect();
        const row = await connection.execute(`INSERT into products (name, price, description) values ("${req.body.name}", ${req.body.price}, "${req.body.description}");`)
        return row;
    } catch (error) {
        console.error("failed to add product", error);
    }
    finally {
        if (connection) {
            connection.end();
        }
    }
}
async function DeleteAllProducts(connectObj) {
    const db = await mysql.createConnection(connectObj);
    try {
        await db.connect();
        const row = await db.execute("DELETE FROM products WHERE id > -1");
        return row;
    } catch (error) {
        console.error("failed to empty the database", error);
    }
    finally {
        if (db) {
            db.end();
        }
    }
}

async function DeleteOneProduct(connectObj, id) {
    const db = await mysql.createConnection(connectObj);
    try {
        await db.connect();
        const row = await db.execute(`DELETE FROM products WHERE id = ${id}`);
        return row;
    } catch (error) {
        console.error("failed to empty the database", error);
    }
    finally {
        if (db) {
            db.end();
        }
    }
}


export { getProduct, getProducts, addProduct, DeleteAllProducts, DeleteOneProduct };