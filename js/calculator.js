/*JavaScript for Assignment 1 Mobility by SID 12765223*/

var FKeyPad = document.Keypad;
var Accumulate = 0;
var AlertNewNum = false;
var PendingOperation = "";
var memory = 0;
var NewNumber = "blank";
var Number1 = "";
var Number2 = "";



function NumberPressed (Num) 
	{
		//if a number was pressed
		if (AlertNewNum) 
		{
			//Display the number
			calculator.display.value = Num;
			AlertNewNum = false;
   		}
		else 
		{
			if (calculator.display.value == "0")
			calculator.display.value = Num;
			else
			calculator.display.value += Num;
   		}
	}

function Operation (Op) 
{
	var display = calculator.display.value;
	if (AlertNewNum && PendingOperation != "=");
	else
	{
		AlertNewNum = true;
		if ( '+' == PendingOperation )
		Accumulate += parseFloat(display);
		else if ( '-' == PendingOperation )
		Accumulate -= parseFloat(display);
		else if ( '/' == PendingOperation )
		Accumulate /= parseFloat(display);
		else if ( '*' == PendingOperation )
		Accumulate *= parseFloat(display);
		else
		Accumulate = parseFloat(display);
		calculator.display.value = Accumulate;
		PendingOperation = Op;
   }
}

function Decimal () 
	{
		var currentDisplay = calculator.display.value;
		if (AlertNewNum) 
		{
			currentDisplay = "0.";
			AlertNewNum = false;
		}
		else
		{
			if (currentDisplay.indexOf(".") == -1)
			currentDisplay += ".";
   		}
		calculator.display.value = currentDisplay;
	}


function BackSpace(input) 
{
	input.value = input.value.substring(0, input.value.length - 1)
}


function MAdd(display)
	{
	memory = memory + eval(display);
	calculator.memDisplay.value = " M ";
	NewNumber = "blank";
	}



function MRecall(display) 
	{
		if(NewNumber != "blank") 
		{
			Number2 += display;
		} 
		else 
		{
			Number1 = display;
		}
		NewNumber = "blank";
		Displayer(display);
	}


function Displayer(displaynumber) 
	{
		calculator.display.value = displaynumber;
	}

function MClear()
	{
		memory = 0;
		calculator.memDisplay.value = "";
	}

function MSubtraction(display) 
	{
	memory = memory - eval(display);
	}






