const db = require('../database/dbConfig.js');

module.exports = {
  findAll,
  findBy,
  findById,
  add,
  deleteById,
  updateById,

  // QoL functions
  getCoachInfoById,
  getCoachSpecsById,
  getCoachesOrderedBy
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

// Returns an object with the coach record, along with their specialties and certifications.
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

// Returns coach ordered by specified column and direction
async function getCoachesOrderedBy(column, direction) {
  try {
    if(!direction) {
      const coaches = await db('coaches').orderBy(column)
      return coaches
    } else {
      const coaches = await db('coaches').orderBy(column, direction)
      return coaches
    }    

  } catch (error) {
    return {
      code: error.code,
      errno: error.errno,
      message: error.message
    }
  }
}


// GET COACH SPECIALTIES BY ID
async function getCoachSpecsById(id) {
  try {
   
    const specialties = await db('coach_specialty_details as csd')

      .join('specialties as s', 'csd.specialty_id', 's.id')
      .select('*')
      .where('csd.coach_id', id)

    return { specialties }

  } catch (error) {
    return {
      code: error.code,
      errno: error.errno,
      message: error.message
    };
  }
}
