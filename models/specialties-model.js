const db = require('../database/dbConfig');

module.exports = {
  findAll,
  findBy,
  findById,
  add,
  deleteById,
  updateById
};

function findAll() {
  return db('specialties');
}

function findBy(filter) {
  return db('specialties').where(filter);
}

function findById(id) {
  return db('specialties')
    .where({ id })
    .first();
}

function add(specialty) {
  return db('specialties')
    .insert(specialty)
    .then(count => {
      return findById(specialty.id);
    });
}

async function deleteById(id) {
  try {
    const delSpecialtyCount = await db('specialties')
      .where({ id })
      .del();
    return delSpecialtyCount;
  } catch (error) {
    return {
      code: error.code,
      errno: error.errno,
      message: error.message
    };
  }
}

async function updateById(id, specialty) {
  try {
    const updatedSpecialtyCount = await db('specialties')
      .where({ id })
      .update(specialty);
    return updatedSpecialtyCount;
  } catch (error) {
    return {
      code: error.code,
      errno: error.errno,
      message: error.message
    };
  }
}
