const db = require('../database/dbConfig.js')

module.exports = {
    findAll,
    findBy,
    findById,
    add,
    deleteById,
    updateById
}

function findAll() {
    return db('coaches')
}

function findBy(filter) {
    return db('coaches').where(filter)
}

function findById(id) {
    return db('coaches').where({id}).first()
}

// IF USING SQLITE
// function add(coach) {
//     return db('coaches').insert(coach)
//         .then(ids => {
//             return findById(ids[0]) // returns the newly added record
//         })
// }

// IF USING PostgreSQL
// async function add(coach) {
//     const [item] = await db('coaches').insert(coach)
//       .returning('*')
//     return item
//  }

 function add(coach) {
    return db('coaches')
      .insert(coach, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
 }

async function deleteById(id) {
    try {
        const delCoachCount = await db('coaches').where({id}).del()
        return delCoachCount
    } catch(error) {
        return {
            code: error.code,
            errno: error.errno,
            message: error.message,
        }
    }
}

async function updateById(id, coach) {
    try {
        const updatedCoachCount = await db('coaches').where({id}).update(coach)
        return updatedCoachCount
    } catch(error) {
        return {
            code: error.code,
            errno: error.errno,
            message: error.message,
        }
    }
}