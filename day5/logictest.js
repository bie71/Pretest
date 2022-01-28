let k = '';

for (let i = 0; i < 8; i++) {

   for (let j = 0; j < 8; j++) {

      // if ((i + j) % 2 === 0) {

      //    k += ' '
      // } else {

      //    k += '#'
      // }

      if ((i + j) % 2 === 0) {
         k += ' '
      } else {

         k += '#'
      }

   }

   k += '\n'

}
console.log(k);