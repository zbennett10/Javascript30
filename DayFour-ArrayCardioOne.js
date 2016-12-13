  <script>
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
    ];

    const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    var filteredInventors = inventors.filter(inventor => inventor.year.toString()[1] === '5');

    // Array.prototype.map()
    // 2. Give us an array of the inventory first and last names
    var fullNames = inventors.map(inventor => inventor.first + " " + inventor.last);   

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    var birthOldToYoung = inventors.sort((a,b) => a.year - b.year); 

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    var totalYears = inventors.reduce(function(total,obj) { return total + (obj.passed - obj.year);}, 0);

    // 5. Sort the inventors by years lived
    var inventorAge = inventors.sort((a,b) => ((b.passed - b.year) - (a.passed - a.year)));

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

var boulevards = ['Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais',
  'Boulevard de l Amiral-Bruix', 'Boulevard de Strasbourg', 'Boulevard des Capucines',
  'Boulevard de la Chapelle', 'Boulevard de Clichy', 'Boulevard du Crime',
  'Boulevard Haussmann', 'Boulevard de l Hôpital', 'Boulevard des Italiens',
  'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Montmartre',
  'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir',
  'Boulevard de Rochechouart', 'Boulevard Saint-Germain', 'Boulevard Saint-Michel',
  'Boulevard de Sébastopol', 'Boulevard du Temple', 'Boulevard Voltaire', 'Boulevard de la Zone'];

var des = boulevards.filter(a => a.includes(' de')); console.log(des);

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    var lastNames = people.map((a) => a.split(',')[0]).sort();

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    var instances = data.reduce((obj,data) => {
      if (data in obj) obj[data]++;
      else obj[data] = 1;
      return obj;
    }, {});

  </script>
