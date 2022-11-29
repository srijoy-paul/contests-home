let url = "https://kontests.net/api/v1/all";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let card_iHTML = "";

    for (contests in data) {
      //   console.log(data[contests].name);
      //   console.log(data[contests].site);

      console.log(contests);
      let StartTimemsec = Date.parse(`${data[contests].start_time}`);
      const StartTime = new Date(StartTimemsec);
      let EndTimemsec = Date.parse(`${data[contests].end_time}`);
      const EndTime = new Date(EndTimemsec);

      card_iHTML += `<div class="card" style="width: 20rem;">
      <img src="https://breakinghierarchy.com/wp-content/uploads/2020/08/hackerrank-logo.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data[contests].name}</h5>
        <p class="card-text">
        <p>Platform : ${data[contests].site}</p>
        <p>Start Time: ${StartTime}</p>
        <p>End Time: ${EndTime}</p>
        <p>In 24 hours: ${data[contests].in_24_hours}</p>
        </p>
        <a href="${data[contests].url}" class="btn btn-primary" target="_blank">Visit here</a>
      </div>
    </div>`;
      document.getElementsByClassName("card-container")[0].innerHTML =
        card_iHTML;
    }
  });
