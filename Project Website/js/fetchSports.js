const sportsDiv = document.getElementById("sports-div");
console.log(sportsDiv);

const getSports = async () => {
  const sports = await fetch(
    "https://www.thesportsdb.com/api/v1/json/2/all_sports.php"
  ).then((response) => response.json());
  return sports.sports;
};

const display = async () => {
  const sports = (await getSports()).map((sport) => {
    switch (sport.strSport) {
      case "Skiing": {
        sport.strSportThumb = "../assets/images/skiingg.webp";
        break;
      }
      case "Skating": {
        sport.strSportThumb = "../assets/images/skating.jpg";
        break;
      }
      case "Wintersports": {
        sport.strSportThumb = "../assets/images/wintersports.webp";
        break;
      }
    }
    // if (sport.strSport === "Skiing") {
    // sport.strSportThumb = "../assets/images/skiingg.webp";
    // } else if (sport.)

    return sport;
  });
  console.log(sports.length);

  let str = `<div class="container"> <div class="row event-row">`;
  let modalStr = ``;
  sports.map((sport) => {
    str += `<div class="col-lg-4 mb-5" data-bs-toggle="modal" data-bs-target="#my${sport.idSport}Modal">
    <div class="event-card">
        <div class="event-card-top">
            <div class="event-title">
                <span>${sport.strSport}</span>
            </div>
            <div class="event-logo-wrapper">
                <img class="event-logo" src="${sport.strSportThumb}" alt="sexists logo">
            </div>
        </div>
        <div class="event-rules">
            ${sport.strFormat}
        </div>
    </div>
</div>`;
    modalStr += `<div
class="modal fade"
style="z-index: 99991"
id="my${sport.idSport}Modal"
tabindex="-1"
role="dialog"
aria-labelledby="my${sport.idSport}Modal"
aria-hidden="true"
>
<div class="modal-dialog modal-xl" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-header-wrapper">
        <div class="modal-left flex-column flex-sm-row">
          <img
            class="modal-header-logo me-2"
            src="${sport.strSportThumb}"
            alt="logo"
          />
          <h5 class="modal-title" id="exampleModalLabel">
            <b>${sport.strSport}</b>
          </h5>
        </div>
        <div>
        <a href="/id/#${sport.strSport}">Leagues</a>
      </div>
      </div>

      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">
      <!-- Optional -->
      <h5 class="text-lg-center">About</h5>
      <div>
       ${sport.strSportDescription}
      </div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
    </div>
  </div>
</div>
</div>`;
    // str += `<h1> ${sport.strSport} </h1> <img src=${sport.strSportIconGreen} />`;
    // str += `<pre>Format: ${sport.strFormat} </pre>`;
    // str += `<img src=${sport.strSportThumb} width="200px"/>`;
    // str += `<br /><small>${sport.strSportDescription}<small>`;
  });
  str += `</div> </div>`;
  sportsDiv.innerHTML = str + modalStr;
};

// sport

display();
