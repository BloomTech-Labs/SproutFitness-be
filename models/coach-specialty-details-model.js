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
  return db('coach_specialty_details');
}

function findBy(filter) {
  return db('coach_specialty_details').where(filter);
}

function findById(id) {
  return db('coach_specialty_details')
    .where({ id })
    .first();
}

function add(csd) {
  return db('coach_specialty_details')
    .insert(csd, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

async function deleteById(id) {
  try {
    const delCSDCount = await db('coach_specialty_details')
      .where({ id })
      .del();
    return delCSDCount;
  } catch (error) {
    return {
      code: error.code,
      errno: error.errno,
      message: error.message
    };
  }
}

async function updateById(id, csd) {
  try {
    const updatedCSDCount = await db('coach_specialty_details')
      .where({ id })
      .update(csd);
    return updatedCSDCount;
  } catch (error) {
    return {
      code: error.code,
      errno: error.errno,
      message: error.message
    };
  }
}