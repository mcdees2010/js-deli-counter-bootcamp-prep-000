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
 while (i < katzDeliLine.length) {
   array.push
 }