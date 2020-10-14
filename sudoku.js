$(document).ready(function()
{

var arr=/*0 1 2 3 4 5 6 7 8*/
   /*0*/[[5,3,4,6,7,8,9,1,2],
   /*1*/[6,7,2,1,9,5,3,4,8],
   /*2*/[1,9,8,3,4,2,5,6,7],
   /*3*/[8,5,9,7,6,1,4,2,3],
   /*4*/[4,2,6,8,5,3,7,9,1],
   /*5*/[7,1,3,9,2,4,8,5,6],
   /*6*/[9,6,1,5,3,7,2,8,4],
   /*7*/[2,8,7,4,1,9,6,3,5],
   /*8*/[3,4,5,2,8,6,1,7,9]];


var num1= document.getElementById("n1"),
    num2= document.getElementById("n2"),
    num3= document.getElementById("n3"),
    num4= document.getElementById("n4"),
    num5= document.getElementById("n5"),
    num6= document.getElementById("n6"),
    num7= document.getElementById("n7"),
    num8= document.getElementById("n8"),
    num9= document.getElementById("n9"),
    num10= document.getElementById("n10"),
    num11= document.getElementById("n11"),
    num12= document.getElementById("n12"),
    num13= document.getElementById("n13"),
    num14= document.getElementById("n14"),
    num15= document.getElementById("n15"),
    num16= document.getElementById("n16"),
    num17= document.getElementById("n17"),
    num18= document.getElementById("n18"),
    num19= document.getElementById("n19"),
    num20= document.getElementById("n20"),
    num21= document.getElementById("n21"),
    num22= document.getElementById("n22"),
    num23= document.getElementById("n23"),
    num24= document.getElementById("n24"),
    num25= document.getElementById("n25"),
    num26= document.getElementById("n26"),
    num27= document.getElementById("n27"),
    num28= document.getElementById("n28"),
    num29= document.getElementById("n29"),
    num30= document.getElementById("n30"),
    num31= document.getElementById("n31"),
    num32= document.getElementById("n32"),
    num33= document.getElementById("n33"),
    num34= document.getElementById("n34"),
    num35= document.getElementById("n35"),
    num36= document.getElementById("n36"),
    num37= document.getElementById("n37"),
    num38= document.getElementById("n38"),
    num39= document.getElementById("n39"),
    num40= document.getElementById("n40"),
    num41= document.getElementById("n41"),
    num42= document.getElementById("n42"),
    num43= document.getElementById("n43"),
    num44= document.getElementById("n44"),
    num45= document.getElementById("n45"),
    num46= document.getElementById("n46"),
    num47= document.getElementById("n47"),
    num48= document.getElementById("n48"),
    num49= document.getElementById("n49"),
    num50= document.getElementById("n50"),
    num51= document.getElementById("n51");

 


$(".btn").click(function(){

	var numbers=[[5,3,num1.value,num2.value,7,num3.value,num4.value,num5.value,num6.value],
              [6,num7.value,num8.value,1,9,5,num9.value,num10.value,num11.value],
              [num12.value,9,8,num13.value,num14.value,num15.value,num16.value,6,num17.value],
              [8,num18.value,num19.value,num20.value,6,num21.value,num22.value,num23.value,3],
              [4,num24.value,num25.value,8,num26.value,3,num27.value,num28.value,1],
              [7,num29.value,num30.value,num31.value,2,num32.value,num33.value,num34.value,6],
              [num35.value,6,num36.value,num37.value,num38.value,num39.value,2,8,num40.value],
              [num41.value,num42.value,num43.value,4,1,9,num44.value,num45.value,5],
              [num46.value,num47.value,num48.value,num49.value,8,num50.value,num51.value,7,9]];


	var count=0;

	for(var i=0 ; i<9 ; i++)
	{
		for(var j=0 ; j<9 ; j++)
		{
			if(arr[i][j]==numbers[i][j])
			   count++;
		}
	}
	
	if(count==81)
	  alert("you are winner");
    else
	  alert("you are loser");

	
       
 });

}); 



/*

	if(num1.value ==arr[0][2] && num2.value==arr[0][3] && num3.value==arr[0][5] 
		&& num4.value==arr[0][6] && num5.value==arr[0][7] && num6.value==arr[0][8] 
		&& num7.value==arr[1][1] && num8.value==arr[1][2] && num9.value==arr[1][6] 
		&& num10.value==arr[1][7] && num11.value==arr[1][8] && num12.value==arr[2][0]
		&& num13.value==arr[2][3] && num14.value==arr[2][4] && num15.value==arr[2][5]
		&& num16.value==arr[2][6] && num17.value==arr[2][8] && num18.value==arr[3][1]
		&& num19.value==arr[3][2] && num20.value==arr[3][3] && num21.value==arr[3][5]
		&& num22.value==arr[3][6] && num23.value==arr[3][7] && num24.value==arr[4][1]
		&& num25.value==arr[4][2] && num26.value==arr[4][4] && num27.value==arr[4][6]
		&& num28.value==arr[4][7] && num29.value==arr[5][1] && num30.value==arr[5][2]
		&& num31.value==arr[5][3] && num32.value==arr[5][5] && num33.value==arr[5][6]
	    && num34.value==arr[5][7] && num35.value==arr[6][0] && num36.value==arr[6][2]
	    && num37.value==arr[6][3] && num38.value==arr[6][4] && num39.value==arr[6][5]
	    && num40.value==arr[6][8] && num41.value==arr[7][0] && num42.value==arr[7][1]
	    && num43.value==arr[7][2] && num44.value==arr[7][6] && num45.value==arr[7][7]
	    && num46.value==arr[8][0] && num47.value==arr[8][1] && num48.value==arr[8][2]
	    && num49.value==arr[8][3] && num50.value==arr[8][5] && num51.value==arr[8][6])

	   alert("you are winner");
    else
	   alert("you are loser");
	*/