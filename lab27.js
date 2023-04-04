// Lab 27
// ให้ใช้ for … of กับ names (ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา

const names = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jack', lastName: 'Dann' },
  { firstName: 'Joe', lastName: 'Dunne' }
];

for(let {firstName, lastName} of names ) {
  console.log(`FullName : ${firstName} ${lastName}`)
}