let amount: number=3600;
let discount: number;
let x:number;

const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'number',
    name: 'meaning',
    message: 'Enter a number?'
  });

  console.log(response.meaning);
})();

console.log(" ");
console.log(" ");



if(amount<1000){
       x=amount*0.95
       console.log(x);
       
}
else if(amount<2000){
    x=amount*0.90
    console.log(x);
}
else if(amount<3000){
    x=amount*0.85
    console.log(x);
}else if(amount<4000){
    x=amount*0.80
    console.log(x);
}else{
    x=amount*0.75
    console.log(x);
}
