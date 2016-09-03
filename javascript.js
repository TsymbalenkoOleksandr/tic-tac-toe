	var k=0;
	var winnerCombination=[
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,4,7],
	[2,5,8],
	[3,6,9],
	[1,5,9],
	[3,5,7]
	];	
	var content=[];

function canvasClicked(n) {		
	z=k%2;	
	 if (content[n]==undefined) {
	 	 document.getElementById("demo").innerHTML=k+1;
	 if (z==0) {
	 	linearFunction(n);
	 	content[n]=true;
	 }
	else {
		circleFunction(n);
		content[n]=false;
	}
	   k++;  
    winnerCheck(content); 
}
else {
	document.getElementById("demo_1").innerHTML="Not allowed!!! Dont make me angry!!!:))";
}
 
}

function linearFunction(n){	
	var canvas=document.getElementById("canvas"+n);
	var ctx=canvas.getContext('2d');	
	ctx.moveTo(0,0);
	ctx.lineTo(50,50);
	ctx.stroke();
	ctx.moveTo(50,0);
	ctx.lineTo(0,50);
	ctx.stroke();
}

function circleFunction(n){
		var canvas=document.getElementById("canvas"+n);
	var ctx=canvas.getContext('2d');	
	ctx.beginPath();
ctx.arc(25,25,25,0,2*Math.PI);
ctx.stroke();
}

function winnerCheck(content) {
for(var a=0;a<winnerCombination.length;a++) {

	if (content[winnerCombination[a][0]]==true&&content[winnerCombination[a][1]]==true&&content[winnerCombination[a][2]]==true) {
	document.getElementById("demo_1").innerHTML="Winner is player with X. Harray!!! You can go or repeat))";
		 alert("THE GAME IS OVER!");
	 location.reload();
}

else if (content[winnerCombination[a][0]]==false&&content[winnerCombination[a][1]]==false&&content[winnerCombination[a][2]]==false) {
document.getElementById("demo_1").innerHTML="Winner is player with O. Harray!!! You can go or repeat))";
	 alert("THE GAME IS OVER!");
	 location.reload();
}
else
{
	continue;
     }
  }
}

function youReload() {

                    location.reload();
}