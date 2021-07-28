const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  
  rl.question("What is your age? ", (answer2) =>{
   
    rl.question("Where do you live? ", (answer3) =>{
     
      rl.question("What is your favourite color? ", (answer4) =>{
       
        rl.question("What is your hobby? ", (answer5) =>{
          
          console.log('.........................');
          console.log(`Your name is: ${answer1}`);
          console.log(`Your age is: ${answer2}`); 
          console.log(`You live in: ${answer3}`);
          console.log(`Your favourite color is: ${answer4}`);    
          console.log(`Your hobby is: ${answer5}`); 
          rl.close();
        });
      });
    });
  });
});



