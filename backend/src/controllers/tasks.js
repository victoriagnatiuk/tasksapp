import { connect } from "../database";

export const getTasks = async (req, res) => {
    const connection = await connect();    
    const [rows] = await connection.query('SELECT * FROM tasks');
    res.json(rows);
}

export const countTasks = async (req, res) => {
    const connection = await connect();    
    const [rows] = await connection.query('SELECT count(id) as count FROM tasks');
    res.json(rows[0]['count']);
}

export const getTask = async (req, res) => {
    const connection = await connect();    
    const [rows] = await connection.query('SELECT * FROM tasks WHERE id = ?', [
        req.params.id
    ]);
    return res.json(rows[0]);
}

export const saveTask = async (req, res) => {
    const connection = await connect();    
    const [results] = await connection.query(
        'INSERT  INTO tasks(title, description) VALUES  (?, ?)',
        [
            req.body.title,
            req.body.description
        ]
    );
    return res.json({
        id: results.insertId,
        ...req.body
    });
}

export const updateTask = async (req, res) => {
    const connection = await connect();    
    const results = await connection.query(
        'UPDATE tasks set ? WHERE id = ?',
        [
            req.body,
            req.params.id
        ]
    );
    res.sendStatus(204);
}

export const deleteTask = async (req, res) => {
    const connection = await connect();    
    await connection.query('DELETE FROM tasks WHERE id = ?', [
        req.params.id
    ]);
    res.sendStatus(204);
}