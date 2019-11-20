const db = require('../database/dbConfig.js');

module.exports = {
  findAll,
  findBy,
  findById,
  add,
  deleteById,
  updateById,

  // QoL functions
  getCoachInfoById
};

function findAll() {
  return db('coaches');
}

function findBy(filter) {
  return db('coaches').where(filter);
}

function findById(id) {
  return db('coaches')
    .where({ id })
    .first();
}

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
    const delCoachCount = await db('coaches')
      .where({ id })
      .del();
    return delCoachCount;
  } catch (error) {
    return {
      code: error.code,
      errno: error.errno,
      message: error.message
    };
  }
}

async function updateById(id, coach) {
  try {
    const updatedCoachCount = await db('coaches')
      .where({ id })
      .update(coach);
    return updatedCoachCount;
  } catch (error) {
    return {
      code: error.code,
      errno: error.errno,
      message: error.message
    };
  }
}

async function getCoachInfoById(id) {
  try {
    
    const coach = await findById(id)
    const specialties = await 
      db('coach_specialty_details as csd')
      .join('specialties as s', 'csd.specialty_id', '=', 's.id')
      .select('*')
      .where('csd.coach_id', id)

    const certifications = await db('coach_certifications').where('coach_id', id)

    return {
      coach,
      specialties,
      certifications
    }

  } catch (error) {
    return {
      code: error.code,
      errno: error.errno,
      message: error.message
    };
  }
}
