
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('coaches').del()
    .then(function () {
      // Inserts seed entries
      return knex('coaches').insert([
        {
          email: 'test@test.com', 
          firstname: 'Latrina', 
          lastname: 'Huang', 
          timezone: 'central',
          city: 'Cedar Rapids',
          country: 'USA',
          language: 'english',
          password: 'test',
          picture_url: 'https://fakepersongenerator.com/Face/female/female20161024805263550.jpg',
          bio: 'Venture stirred by starlight shores of the cosmic ocean network of wormholes circumnavigated quasar. Emerged into consciousness invent the universe concept of the number one star stuff harvesting star light something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing. From which we spring the ash of stellar alchemy are creatures of the cosmos a mote of dust suspended in a sunbeam star stuff harvesting star light across the centuries and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          is_active: 1
        },
        {
          email: 'test2@test.com', 
          firstname: 'Theresia', 
          lastname: 'Dority', 
          timezone: 'eastern',
          city: 'Harold',
          password: 'test',
          country: 'USA',
          language: 'english',
          picture_url: 'https://fakepersongenerator.com/Face/female/female20161024634585480.jpg',
          bio: 'Venture stirred by starlight shores of the cosmic ocean network of wormholes circumnavigated quasar. Emerged into consciousness invent the universe concept of the number one star stuff harvesting star light something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing. From which we spring the ash of stellar alchemy are creatures of the cosmos a mote of dust suspended in a sunbeam star stuff harvesting star light across the centuries and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          is_active: 1
        },
        {
          email: 'test3@test.com', 
          firstname: 'Robert', 
          lastname: 'Mueller', 
          timezone: 'eastern',
          city: 'Newark',
          password: 'test',
          country: 'USA',
          language: 'english',
          picture_url: 'https://fakepersongenerator.com/Face/male/male1084474628235.jpg',
          bio: 'Venture stirred by starlight shores of the cosmic ocean network of wormholes circumnavigated quasar. Emerged into consciousness invent the universe concept of the number one star stuff harvesting star light something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing. From which we spring the ash of stellar alchemy are creatures of the cosmos a mote of dust suspended in a sunbeam star stuff harvesting star light across the centuries and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          is_active: 1
        },
        {
          email: 'test4@test.com', 
          firstname: 'Jean', 
          lastname: 'Moore', 
          timezone: 'mountain',
          city: 'Phoenix',
          password: 'test',
          country: 'USA',
          language: 'english',
          picture_url: 'https://fakepersongenerator.com/Face/female/female20161025483166199.jpg',
          bio: 'Venture stirred by starlight shores of the cosmic ocean network of wormholes circumnavigated quasar. Emerged into consciousness invent the universe concept of the number one star stuff harvesting star light something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing. From which we spring the ash of stellar alchemy are creatures of the cosmos a mote of dust suspended in a sunbeam star stuff harvesting star light across the centuries and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          is_active: 1
        },
        {
          email: 'test5@test.com', 
          firstname: 'James', 
          lastname: 'Conley', 
          timezone: 'mountain',
          city: 'Phoenix',
          password: 'test',
          country: 'USA',
          language: 'english',
          picture_url: 'https://fakepersongenerator.com/Face/male/male20161086693679535.jpg',
          bio: 'Venture stirred by starlight shores of the cosmic ocean network of wormholes circumnavigated quasar. Emerged into consciousness invent the universe concept of the number one star stuff harvesting star light something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing. From which we spring the ash of stellar alchemy are creatures of the cosmos a mote of dust suspended in a sunbeam star stuff harvesting star light across the centuries and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          is_active: 1
        },
        {
          email: 'test6@test.com', 
          firstname: 'Kathleen', 
          lastname: 'Turner', 
          timezone: 'central',
          city: 'Houston',
          password: 'test',
          country: 'USA',
          language: 'english',
          picture_url: 'https://fakepersongenerator.com/Face/female/female20161025181176880.jpg',
          bio: 'Venture stirred by starlight shores of the cosmic ocean network of wormholes circumnavigated quasar. Emerged into consciousness invent the universe concept of the number one star stuff harvesting star light something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing. From which we spring the ash of stellar alchemy are creatures of the cosmos a mote of dust suspended in a sunbeam star stuff harvesting star light across the centuries and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          is_active: 1
        },
        {
          email: 'test7@test.com', 
          firstname: 'Michael', 
          lastname: 'Martinez', 
          timezone: 'eastern',
          city: 'Waterbury',
          password: 'test',
          country: 'USA',
          language: 'english',
          picture_url: 'https://fakepersongenerator.com/Face/male/male1084200952026.jpg',
          bio: 'Venture stirred by starlight shores of the cosmic ocean network of wormholes circumnavigated quasar. Emerged into consciousness invent the universe concept of the number one star stuff harvesting star light something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing. From which we spring the ash of stellar alchemy are creatures of the cosmos a mote of dust suspended in a sunbeam star stuff harvesting star light across the centuries and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          is_active: 1
        },
        {
          email: 'test8@test.com', 
          firstname: 'Emily', 
          lastname: 'Schmidt', 
          timezone: 'pacific',
          city: 'Oakland',
          password: 'test',
          country: 'USA',
          language: 'english',
          picture_url: 'https://fakepersongenerator.com/Face/female/female1023246516449.jpg',
          bio: 'Venture stirred by starlight shores of the cosmic ocean network of wormholes circumnavigated quasar. Emerged into consciousness invent the universe concept of the number one star stuff harvesting star light something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing. From which we spring the ash of stellar alchemy are creatures of the cosmos a mote of dust suspended in a sunbeam star stuff harvesting star light across the centuries and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          is_active: 1
        },
        {
          email: 'test9@test.com', 
          firstname: 'Frank', 
          lastname: 'Thompson', 
          timezone: 'central',
          city: 'Skokie',
          password: 'test',
          country: 'USA',
          language: 'english',
          picture_url: 'https://fakepersongenerator.com/Face/male/male1084281133454.jpg',
          bio: 'Venture stirred by starlight shores of the cosmic ocean network of wormholes circumnavigated quasar. Emerged into consciousness invent the universe concept of the number one star stuff harvesting star light something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing. From which we spring the ash of stellar alchemy are creatures of the cosmos a mote of dust suspended in a sunbeam star stuff harvesting star light across the centuries and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          is_active: 1
        },
        {
          email: 'test10@test.com', 
          firstname: 'Charles', 
          lastname: 'Darst', 
          timezone: 'central',
          city: 'Howells',
          password: 'test',
          country: 'USA',
          language: 'english',
          picture_url: 'https://fakepersongenerator.com/Face/male/male20161083836272461.jpg',
          bio: 'Venture stirred by starlight shores of the cosmic ocean network of wormholes circumnavigated quasar. Emerged into consciousness invent the universe concept of the number one star stuff harvesting star light something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing. From which we spring the ash of stellar alchemy are creatures of the cosmos a mote of dust suspended in a sunbeam star stuff harvesting star light across the centuries and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          is_active: 1
        },

        
        
      ]);
    });
};

