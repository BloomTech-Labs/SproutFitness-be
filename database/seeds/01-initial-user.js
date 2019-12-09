
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('coaches').del()
    .then(function () {
      // Inserts seed entries
      return knex('coaches').insert([
        {
          id: '545asd45x5x5x5x',
          email: 'test885s5s@test.com', 
          firstname: 'Latrina', 
          lastname: 'Huang', 
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
          id: '545232323x5x5x',
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
          resetPasswordToken: 'fake token 2',
          resetPasswordExpires: Date.now(),
          is_active: 1
        },
        {
          id: 'tyutyu',
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
          resetPasswordToken: 'fake token 3',
          resetPasswordExpires: Date.now(),
          is_active: 1
        },
        {
          id: '545abnmbnm5x5x5x',
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
          resetPasswordToken: 'fake token 4',
          resetPasswordExpires: Date.now(),
          is_active: 1
        },
        {
          id: '545a1232335x5x5x5x',
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
          resetPasswordToken: 'fake token 5',
          resetPasswordExpires: Date.now(),
          is_active: 1
        },
        {
          id: '5452323232323x5x5x5x',
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
          resetPasswordToken: 'fake token 6',
          resetPasswordExpires: Date.now(),
          is_active: 1
        },
        {
          id: '545asd45x5xasdasdasd5x5x',
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
          resetPasswordToken: 'fake token 7',
          resetPasswordExpires: Date.now(),
          is_active: 1
        },
        {
          id: '545asd45x232323sssdd',
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
          resetPasswordToken: 'fake token 8',
          resetPasswordExpires: Date.now(),
          is_active: 1
        },
        {
          id: '545xcvdfuu885x5x5x',
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
          resetPasswordToken: 'fake token 9',
          resetPasswordExpires: Date.now(),
          is_active: 1
        },
        {
          id: '545kjlklaklsjd5x',
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
          resetPasswordToken: 'fake token 10',
          resetPasswordExpires: Date.now(),
          is_active: 1
        },
        

        
        
      ]);
    });
};

