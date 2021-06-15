function showSalary(users, age) {
 let minAge = users.filter(user => user.age <= age);
 let list = minAge.map(user => `${user.name}, ${user.balance}`);
  let results = list.join('\n');
  return results;
};
let result = showSalary(users, age);
