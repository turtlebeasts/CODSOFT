function number_input(y){
	if(y.className === "numb"){
		setTimeout(()=>{y.style="color: grey;box-shadow: -10px 11px 23px 0px rgba(0,0,0,0.75);"},500)
	}else{
		setTimeout(()=>{y.style="color: #d56464;box-shadow: -10px 11px 23px 0px rgba(0,0,0,0.75);"},500)
	}
	var x = y.innerHTML;
	y.style="color: rgb(48,209,245);box-shadow: 10px 11px 23px 0px rgba(48,209,245,0.75);"
	
	if(x=='CE'){
		document.getElementById('display').value="0";
	}else if(x=='='){
		if(document.getElementById('display')==0){
			document.getElementById('display')=0;
		}else{
		var res=math.evaluate(document.getElementById('display').value);
		if(res=='Infinity'){
			document.getElementById('display').value='Its a zero Division you fool';
		}else{
			document.getElementById('display').value=res;
		}
		}
	}else{
		if(document.getElementById('display').value==0){
			document.getElementById('display').value=x;
		}else{
			document.getElementById('display').value+=x;
		}
	}
}