function ComputeCheckDigit(strMCN){
	var i;
	var intStep1;
	var intStep2;
	var intStep3;
	var intStep4;
	var intDigit;

	strMCN=Left(strMCN,7);

	//Multiply every other digit by 2, starting with the first
	//digit in the MRN.ac

	intStep1=0;

	for (i=1;i<=7;i=i+2){
	intDigit = parseInt(Mid(strMCN,i,1)*2);
		if (intDigit > 9){   //add the digits together
			intDigit=1+parseInt(Right((''+intDigit),1));
		}
		intStep1=intStep1+intDigit;
	}

	//Take the sum of every other digit, starting with the second digit,
	//starting with the 2nd digit in the MRN.

	intStep2=0;

	for (i=2;i<=7;i=i+2){
		intStep2=intStep2+(parseInt(Mid(strMCN,i,1)));
	}

	//Add steps 1 and 2 together.
	intStep3=intStep1+intStep2;

	//Divide the sum by 10, and obtain the remainder.
	intStep4=intStep3%10;

	//If the remainder is 0 Then check-digit is 0.
	if (intStep4==0){
		return 0;
	//Check-digit is the remainder from 10.
	}
	else{
		return 10-intStep4;
	}
}
