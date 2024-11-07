	document.getElementById("countButton").addEventListener("click",function(){
	let text = document.getElementById("textoinput").value;
	let words = texto.trim().split(/\s+/).filter(function(word){
		return word.length> 0 ;
	});
	document.getElementById("wordCound").textContent = `Voce digitou ${words.length} palavras.rapidão`
});