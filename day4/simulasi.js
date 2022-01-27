let max = 21,
   min = 1;

while (min <= max) {

   if ((min % 2 === 1) && (min % 3 !== 0)) {

      console.log(min + ' - Santai');
   }
   if ((min % 2 === 1) && (min % 3 === 0)) {
      console.log(min + ' - I Love Coding');
   }
   if (min % 2 === 0) {
      console.log(min + ' - Berkualitas');
   }
   min++
}