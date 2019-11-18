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
  return db('coach_certifications');
}

function findBy(filter) {
  return db('coach_certifications').where(filter);
}

function findById(id) {
  return db('coach_certifications')
    .where({ id })
    .first();
}

function add(cert) {
  return db('coach_certifications')
    .insert(cert, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

async function deleteById(id) {
  try {
    const delCertCount = await db('coach_certifications')
      .where({ id })
      .del();
    return delCertCount;
  } catch (error) {
    return {
      code: error.code,
      errno: error.errno,
      message: error.message
    };
  }
}

async function updateById(id, cert) {
  try {
    const updatedCertCount = await db('coach_certifications')
      .where({ id })
      .update(cert);
    return updatedCertCount;
  } catch (error) {
    return {
      code: error.code,
      errno: error.errno,
      message: error.message
    };
  }
}
