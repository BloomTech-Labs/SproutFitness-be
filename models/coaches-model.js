const db = require('../database/dbConfig.js');

module.exports = {
  findAll,
  findBy,
  findById,
  add,
  deleteById,
  updateById,
  updateByEmail,
  updateByFilter,

  // QoL functions
  getCoachInfoById,
  getCoachesOrderedBy,
  getCoachSpecsByCoachId,
  getCoachesBySpecsId,
};

function findAll() {
  return db('coaches');
}

function findBy(filter) {
  return db('coaches').where(filter);
}

function findById(id) {
  return db('coaches')
    .select( //omit the password
      'id',
      'firstname',
      'lastname',
      'email',
      'bio',
      'language',
      'timezone',
      'picture_url',
      'city',
      'country',
      'is_active'
    )
    .where({ id })
    .first();
}

async function add(coach) {
  try {
    const responseIds = await db('coaches').insert(coach).returning('id')
    const newCoachId = responseIds[0]

    const newCoachData =  await findById(newCoachId)
    return newCoachData
  } catch(error) {
    return error
  }
  
}

async function deleteById(id) {
  try {
    const delCoachCount = await db('coaches')
      .where({
        id
      })
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
    const updatedCoachId = await db('coaches')
      .where({ id })
      .update(coach)
      .returning('id')
    const updatedCoach = await findById(updatedCoachId[0])
    return updatedCoach;
  } catch (error) {
    return {
      code: error.code,
      errno: error.errno,
      message: error.message
    };
  }
}

async function updateByEmail(email, user) {
  try {
    const count = await db('coaches').where({ email }).update(user)
    return count
  } catch (error) {
      return {
        message: error.message
      }
  }
}

async function updateByFilter(resetPasswordToken, user) {
  try {
    const count = await db('coaches').where({ resetPasswordToken }).update(user)
    return count
  } catch (error) {
      return {
          message: error.message
      }
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


// GET COACH SPECIALTIES (BY COACH ID)
function getCoachSpecsByCoachId(id) {
  return db('coach_specialty_details as csd')
    .join('specialties as s', 'csd.specialty_id',  's.id')
    .select('*')
    .where('csd.coach_id', id)
}


// GET ALL COACHES WITH SPECIFIED SPECIALTY (BY SPECIALTY ID)
function getCoachesBySpecsId(id) {
  return db('coach_specialty_details as csd')
    .join('coaches', 'csd.coach_id',  'coaches.id')
    .select('*')
    .where('csd.specialty_id', id)
}