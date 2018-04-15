var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {

katzDeliLine.push(`${name}`);

return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return(`Currently serving ${katzDeliLine.shift()}.`);
  }
    else{
      return("There is nobody waiting to be served!");
    }
}

function currentLine(katzDeliLine) {
 const array = [];
 
 let i = 0
 if(i < katzDeliLine.length) {
   array.push(`"The line is currently: ${katzDeliLine}"`)
   i++;
 }
   else{
     array.push("The line is currently empty.")
   }
 return array
}