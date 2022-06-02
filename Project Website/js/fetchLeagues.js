const getLeagues = async () => {
  const sports = await fetch(
    "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php"
  ).then((response) => response.json());
  return sports.leagues;
};
const value = window.location.hash.substring(1);
const leaguesDiv = document.getElementById("leagues");

console.log(value);
const url = "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";
getLeagues().then((data) => {
  const sportValue = decodeURI(
    value.replace(value.charAt(0), value.charAt(0).toUpperCase())
  );

  console.log(sportValue);
  const leagues = data.filter((sport) => sport.strSport === sportValue);
  console.log(leagues);
  let str = "<div><ul>";

  leagues.map((league) => {
    str += `
    <li>
      <h1>${league.strLeague}</h1>
    </li>`;
  });
  str += `</ul></div>`
  leaguesDiv.innerHTML = str;
});
