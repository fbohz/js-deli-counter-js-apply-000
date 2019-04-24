
var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
  var num  = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return "Welcome, " + name + "." + " You are number "  + num + " in line."
}

function nowServing (katzDeliLine) {
  
  
  if (katzDeliLine.length === 0 || katzDeliLine === undefined) {
    return "There is nobody waiting to be served!"
    
  } else {
<<<<<<< HEAD
    return "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()  
  }
  
=======
    return katzDeliLine[0]
    katzDeliLine.shift()
  }
>>>>>>> d1568d0d1baa09c003479ef7d52408ea59260481
}

function currentLine(katzDeliLine) {
  
    if (katzDeliLine.length === 0 || katzDeliLine === undefined) {
    return "The line is currently empty."
    
  } else {
<<<<<<< HEAD
    
    for (i = 0; i < katzDeliLine.length; i++) {
    return "The line is currently: " + num[i] + ". " + katzDeliLine[i]
    }
=======
    return "The line is currently: " + katzDeliLine.toString()
>>>>>>> d1568d0d1baa09c003479ef7d52408ea59260481
  }
  
}