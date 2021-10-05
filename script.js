// fetch('https://icanhazdadjoke.com/slack')
//     .then(data => data.json())
//     .then(jokeData => {
//         const jokeText = jokeData.attachments[0].text;
//         const jokeElement = document.getElementById('dataElement');

//         dataElement.innerHTML = jokeText;
//     })

fetch("https://motivational-quotes1.p.rapidapi.com/motivation", {
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-host": "motivational-quotes1.p.rapidapi.com",
		"x-rapidapi-key": "d1cbae5989mshbadf9a5313cefd3p1d640cjsn613d94837d47"
	},
	"body": {
		"key1": "value",
		"key2": "value"
	}
})
.then(response => {
	console.log(response);
    return response.text();
})
.then((data)=>{
    console.log(data);
    document.getElementById("dataElement").innerHTML = data;
}
)

.catch(err => {
	console.error(err);
});



