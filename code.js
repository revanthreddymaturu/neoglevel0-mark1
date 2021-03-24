var readlineSync=require('readline-sync');
//readlineSync.setDefaultOptions({prompt:'$'});
var chalk=require('chalk');
var username=readlineSync.question(chalk.bgMagenta("Hey! Please enter your name:"));
console.log("\nWelcome "+chalk.yellow.bold(username)+"!"+" Let's see how well you know Revanth");
var set=[{
question:`\nWhat is Revanth's Surname?`,
answer:`maturu`
},
{
question:`\nWhat is Revanth's favourite street food?(panipoori or pizza)`,
answer:`panipoori`
},
{
question:`\nWhat is Revanth's birth date?(Just enter the number)?`,
answer:`30`
},
{
question:`\nWhat is Revanth's birth month?(Give the name of month)?`,
answer:`april`
},
{
question:`\nWhere was Revanth born?(Enter the district name)`,
answer:`nellore`
}];
var score=0;
if(readlineSync.keyInYN("\nDo you want to start the game?"))
{
  for(var i=0;i<set.length;i++)
  {
    console.log(set[i].question);
    var userans=readlineSync.question("Enter your answer: ");
    if(userans.toUpperCase()===set[i].answer.toUpperCase())
    {
      score++;
      console.log(chalk.bold.inverse.green("\nHurray! Right Answer"));
      console.log(chalk.green('-----------------------------------------'));
    }
    else
    {
      console.log(chalk.bold.inverse.red("\nSorry buddy! You are wrong"));
          console.log(chalk.red('-----------------------------------------'));

    }
  }
  console.log("\nYour total score is:"+chalk.green.bold(score)+". Thanks for playing buddy.")
  if(readlineSync.keyInYN("\nDo you want to see the correct answers?"))
  {
    console.log(`1)Maturu\n 2)Panipoori :)\n 3)30\n 4)April\n 5)Nellore\n`);
  }


}
else{
  console.log("\nThanks for coming buddy! See you soon...");
  process.exit();
}

