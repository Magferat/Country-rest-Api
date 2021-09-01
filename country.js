const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = countries => {
    // console.log(countries);
    const countriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        const p = document.createElement('p');
        p.classList.add('country');
        p.innerHTML = `<h5>Name : ${country.name}</h5><h5>Capital : ${country.capital}</h5><button onclick="loadByName('${country.name}')"> Details </button>`
        countriesDiv.appendChild(p);
    });
}
const loadByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data[0]))

}
const displayDetails = country => {
    console.log(country);
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `<img width = 200px src="${country.flag} " alt="">
    <h3>Name : ${country.name} </h3> 
    <h5>Capital : ${country.capital}</h5> 
    <h5>Currency : '${country.currencies[0].name}', ('${country.currencies[0].symbol}') </h5>
    <h5>Languages : ${country.languages[0].name}</h5><h5>Area : ${country.area}</h5>
    <h5>Population : ${country.population}</h5><h5>Region : ${country.subregion}</h5>
    <h5>Time-zone : ${country.timezones}</h5>`

}