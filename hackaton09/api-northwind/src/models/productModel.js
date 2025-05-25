const db = require('./db.js');

const getAllProducts = async (id) => {
    try {
        console.log('getAllProducts', id);

        const query = `SELECT * FROM products WHERE product_name = '${id}' AND discontinued = 0`;

        const res = await db.query(query);
        return res.rows;
    } catch (error) {
        console.log(error)
    }
}

const insertProduct = async (product) => {

    const query = `INSERT INTO products 
    (product_name, supplier_id, category_id, quantity_per_unit, unit_price, units_in_stock, units_on_order, reorder_level, discontinued)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *`;
    const values = [
        product.product_name,
        product.supplier_id,
        product.category_id,
        product.quantity_per_unit,
        product.unit_price,
        product.units_in_stock,
        product.units_on_order,
        product.reorder_level,
        product.discontinued
    ];
    const res = await db.query(query, values);
    return res.rows[0];
}

const getProductBetweenName = async (caracter) => {
    const res = await db.query('Select * from get_products_between_name($1)', [caracter]);
    return res.rows;
}

module.exports = {
    getAllProducts,
    insertProduct,
    getProductBetweenName
}