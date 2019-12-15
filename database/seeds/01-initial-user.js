
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('coaches').del()
    .then(function () {
      // Inserts seed entries
      return knex('coaches').insert([
        {
          id: 'adf4b829-9d72-406f-8db2-de69e9655c60',
          email: 'test@test.com', 
          firstname: 'Melissa', 
          lastname: 'Smith', 
          timezone: 'central',
          city: 'Cedar Rapids',
          country: 'USA',
          language: 'english',
          password: 'test',
          picture_url: 'https://fakepersongenerator.com/Face/female/female20161024805263550.jpg',
          bio: 'Venture stirred by starlight shores of the cosmic ocean network of wormholes circumnavigated quasar. Emerged into consciousness invent the universe concept of the number one star stuff harvesting star light something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing. From which we spring the ash of stellar alchemy are creatures of the cosmos a mote of dust suspended in a sunbeam star stuff harvesting star light across the centuries and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          resetPasswordToken: 'fake token 1',
          resetPasswordExpires: Date.now(),
          is_active: 1
        },
        {
          id: '0dd171a1-37f7-4a71-9bc3-06c30fbb623b',
          email: 'test2@test.com', 
          firstname: 'Zoey', 
          lastname: 'Jackson', 
          timezone: 'eastern',
          city: 'New York City',
          country: 'USA',
          language: 'english',
          password: 'test',
          picture_url: 'https://fakepersongenerator.com/Face/female/female20161024805263550.jpg',
          bio: 'Venture stirred by starlight shores of the cosmic ocean network of wormholes circumnavigated quasar. Emerged into consciousness invent the universe concept of the number one star stuff harvesting star light something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing. From which we spring the ash of stellar alchemy are creatures of the cosmos a mote of dust suspended in a sunbeam star stuff harvesting star light across the centuries and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          resetPasswordToken: 'fake token 2',
          resetPasswordExpires: Date.now(),
          is_active: 1
        },   
      ]);
    });
};

