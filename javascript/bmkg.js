fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.Infogempa.gempa); // array

    // foreach 
    data.Infogempa.gempa.forEach(element => {
        document.getElementById("data-gempa").innerHTML += `
            ${element.Tanggal} <br>
            ${element.Wilayah} <hr>
        `
    });
} )

// Latihan
// Gempabumi Terbaru 
fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
.then(response => response.json())
.then(data => {
    console.log(data);

    let result = data.Infogempa.gempa
    
    document.getElementById("gempa-terbaru").innerHTML = `
    <img src="https://static.bmkg.go.id/${result.Shakemap}" width="200px"> <br>
    ${result.Tanggal} <br>
    ${result.Wilayah}`
})