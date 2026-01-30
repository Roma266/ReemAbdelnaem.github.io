try {
  let a = b; // ReferenceError
} catch (error) {
  console.log(error.name);    // ReferenceError
  console.log(error.message); // b is not defined
  console.log(error.stack);   // Stack trace
}