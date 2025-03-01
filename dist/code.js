const today = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function generateMonth(year, monthIndex) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const calendar = document.getElementById("poop");
  const h1 = document.createElement("h1");
  h1.textContent = monthNames[monthIndex];
  h1.addEventListener("click", () => {
    const monthAlbums = Object.keys(albums)
      .filter((date) =>
        date.includes(`${year}-${(monthIndex + 1).toString().padStart(2, "0")}`)
      )
      .flatMap((k) => albums[k]);

    openModal(monthNames[monthIndex], monthAlbums);
  });
  calendar.appendChild(h1);

  const ul = document.createElement("ul");

  daysOfWeek.forEach((day) => {
    const li = document.createElement("li");
    li.textContent = day;
    ul.appendChild(li);
  });
  calendar.appendChild(ul);

  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay(); // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)

  for (let i = 0; i < firstDayOfMonth; i++) {
    ul.appendChild(document.createElement("li")); // Empty space
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("li");
    const timeElement = document.createElement("time");
    const dateTimeString = `${year}-${(monthIndex + 1)
      .toString()
      .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    timeElement.setAttribute("datetime", dateTimeString);
    timeElement.textContent = day;
    dayElement.appendChild(timeElement);

    const albumArtworks = albums[dateTimeString]?.map((a) => a.image) ?? [];

    albumArtworks
      .map((artwork) => ({ artwork, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ artwork }) => artwork)
      .forEach((artwork, i) => {
        const img = document.createElement("img");
        img.setAttribute("src", artwork);
        img.addEventListener("click", () =>
          openModal(dateTimeString, albums[dateTimeString])
        );
        img.setAttribute(
          "style",
          `transform: rotate(${
            i % 2 !== 0 && day % 2 === 0 ? "-" : i % 2 !== 0 ? "+" : ""
          }${(i * 11) % 30}deg); z-index: ${i + 1}`
        );
        dayElement.appendChild(img);
      });

    // matt todo :- i might need to do the datetime pad string logic here
    if (
      today.getDate() === day &&
      today.getMonth() === monthIndex &&
      today.getFullYear() === year
    ) {
      dayElement.classList.add("today");
    }

    ul.appendChild(dayElement);
  }
}

function openModal(title, todaysAlbums) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML += `<h1>${title}</h1>`;

  const albumsDiv = document.createElement("div");

  const createSection = (sectionName, value) => {
    const section = document.createElement("div");
    const sectionValue = document.createElement("span");
    section.textContent = `${sectionName}: `;
    sectionValue.textContent = value;
    sectionValue.setAttribute("class", "big");
    section.appendChild(sectionValue);

    return section;
  };

  const resetModal = () => {
    modal.style.display = "none";
    modalContent.innerHTML =
      '<span id="modal-close" class="modal-close">x</span>';
  };

  for (let i = 0; i < todaysAlbums.length; i++) {
    if (i > 0) {
      albumsDiv.innerHTML += "<hr />";
    }
    const albumDiv = document.createElement("div");
    albumDiv.setAttribute("class", "album");

    const artwork = document.createElement("img");
    artwork.setAttribute("src", todaysAlbums[i].image);
    artwork.setAttribute(
      "onclick",
      `window.open('${todaysAlbums[i].rym}', '_blank');`
    );

    const albumSection = createSection("Album", todaysAlbums[i].album);
    const artistSection = createSection("Artist", todaysAlbums[i].artist);

    albumDiv.appendChild(artwork);

    const textDiv = document.createElement("div");
    textDiv.setAttribute("class", "info");
    textDiv.appendChild(albumSection);
    textDiv.appendChild(artistSection);

    albumDiv.appendChild(textDiv);
    albumsDiv.appendChild(albumDiv);
  }
  modalContent.appendChild(albumsDiv);

  // Display the modal
  modal.style.display = "block";

  // Close the modal when the close button is clicked
  const modalClose = document.getElementById("modal-close");

  modalClose.onclick = resetModal;

  // Close the modal if the user clicks anywhere outside the modal content
  window.onclick = function (event) {
    if (event.target === modal) {
      resetModal();
    }
  };

  window.onkeydown = function ({ key }) {
    if (key === "Escape") {
      resetModal();
    }
  };
}

for (let mIndex = 0; mIndex < today.getMonth() + 1; mIndex++) {
  generateMonth(2025, mIndex);
}
