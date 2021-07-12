console.log("Testingß")
console.log("1111")

// fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/GetLucky%2311560/battle", {
// 	//"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "9dafef2defmshb8713a2c67eba8ap12e8cfjsn8f171764478a",
// 		"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
// 	}
// })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => {
// 	console.error(err);
// });

warzoneData().catch(err => console.error(err))

async function warzoneData() {
  const response = await fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/Amartin743/psn", {
      "method": "GET",
      "headers": {
      "x-rapidapi-key": "4584d04c9bmsh107a4bef0ad2830p1dc873jsn69e72d896478",
      "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
      }
  })
  response.json().then(stat => console.log(stat))
}