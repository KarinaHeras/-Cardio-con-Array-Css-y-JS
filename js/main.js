const inventors = [
    {first: 'Alberto', last: 'Einstein', year: 1879, passed: 1955},
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    { first: 'Marie', last: 'Curie', year: 1867, passed:1934},
    { first: 'Johannes', last: 'Keple', year: 1571, passed: 1630},
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    { first: 'Max', last: 'Copernicus', year: 1473, passed: 1543},
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin,Menachem','Belloc , Hilaire','Bellow , Saul',
  'Benchley , Robert', 'Benchley , Rober', 'Benenson , Peter', 'Ben-Gurion , David',
  'Benjamin ,Walter', 'Benn, Tony', 'Bennington , chester', 'Benson , Leana', 'Bent , silas',
  'Bentsen , Lloyd', 'Berger , Ric', 'Bergman , Ingmar', 'Berio, Luciano' , 'berle Milton',
  'Berlin , Iirving', 'Berlne , Eric', 'Bernhard, Sandra', 'Berra , yogi', 'Berry , Halle',
  'Berry , Wendell', 'Betha , Erin ', 'Bevan , Aneurin', 'Bavel , ken', 'Piden , Joseph' , 
  'Bierce , Ambrose', 'Biko , Steve', 'Billings , Josh', 'Biondo , Frank', 'Birreli , Augustine',
  'Black Elk', 'Blair , Robert', 'Blair , Robert', 'Blair , Tony', 'Blake , William'];                     

//array.prototype.filter()
// 1 filter the fist of inventors for those who were bour in the 1500's

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600 ))
console.table(fifteen);

//Array.prototype.map() 
// 2. Give us an array of the inentory first and last names

const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullName);

//Array.prototype.sort()
// 3 sort the inventor by birthdate, oldest to yurgest

// const ordered = inventors.sort(funtion (a,b){
//  if(a.year > b.year){
//        return 1;

 //   } else {
//        return -1;
//    }
//});

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered)

// Array.prototype.reduce()
// 4. How many year did all the inventors live?
const totalYear = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYear);

// 5. sort the inventor by years lived

// 6. Create a list of boulevard in paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/category:Boulevards_in_paris 

















