const mc = {
  // key: value 
  name: 'Dokja',
  surname: 'Kim',
  set fullName(value) {
    [this.surname, this.name] = value.split(' ');
  },
  get fullName() {
    return `${this.surname} ${this.name}`
  },
  title: ['King of Kingless World', 'Demon King of Salvation'],
  'coins posessed': 2_000_000,
  skills: 
    ['Omniscient Reader\'s Viewpoint', 'Bookmark'],
  info: {
    type: 'Constellation',
    system: 'Evil',
  },
};

const mc2 = {
  // key: value 
  name: 'Jonhyook',
  surname: 'Yoo',
  set fullName(value) {
    [this.surname, this.name] = value.split(' ');
  },
  get fullName() {
    return `${this.surname} ${this.name}`
  },
  title: ['Supreme King'],
  'coins posessed': 1_000_000,
  skills: 
    ['Eyes of prophet'],
  info: {
    type: 'Constellation',
    system: 'Evil',
  },
};

// console.log(mc)
// console.log(mc.name);
// console.log(mc['coins posessed'])

// console.log(mc.fullName)
// mc.fullName = 'Elers Alex';
// console.log(mc)

// // Iterations
// console.log(Object.entries(mc))
// console.log(Object.keys(mc))
// console.log(Object.values(mc))

// //Merging
// const user1 = {
//   name: 'John',k
//   star: 2
// };

// const user2 = {
//   surname: 'Willson',
//   car: 'Honda'k
// };

// const users = {
//   ...user1,
//   ...ujser2,
//   name: 'Sora',
// };

// console.log('users', users)

// if (mc?.inf ?.type) {
//   console.log('Has a type')
// } else {
//   console.log("Doesn't have a type")
// }

// console.log(Boolean(mc.type))

// Date and Time 


// const user1 = {
//   name: 'Alex',
//   age: 999,
//   getName() {
//     console.log(this.name)
//   }
// };

// const user2 = {
//   name: 'Joahna',
//   age: '22',
// };

// user1.getName();
// user1.getName.call(user2);
// user1.getName.apply(user2);
// user1.getName.bind(user2)();

function getInfo(world = '') {
  console.log(this)
  console.log(`
Name: ${this.name} ${this.surname} 
Title: ${this.title}j
Skills: ${this.skills}
World: ${world}`)
}
getInfo.call(mc2, 'Earth')
getInfo.apply(mc, ['Demon Realm'])
const binded = getInfo.bind(mc, 'Moon');
binded();

