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

function add(coach) {
    return db('coaches').insert(coach)
        .then(ids => {
            return findById(ids[0]) // returns the newly added record
        })
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