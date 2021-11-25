(() => {
  // Data: Lineup
  const lineup = [
    {
      thumbnailUrl: 'https://assets.rockwerchter.be/files/cache/medium/files/fnm-1500-60cc6b19a9efc.jpg',
      bandName: 'Faith No More',
      playDay: 'saturday'
    },
    {
      thumbnailUrl: 'https://assets.rockwerchter.be/files/cache/medium/files/top-1500-60cc6b1984834.jpg',
      bandName: 'Twenty one pilots',
      playDay: 'saturday'
    },
    {
      thumbnailUrl: 'https://assets.rockwerchter.be/files/cache/medium/files/top-1500-60cc6b1984834.jpg',
      bandName: 'Twenty one pilots',
      playDay: 'saturday'
    },
    {
      thumbnailUrl: 'https://assets.rockwerchter.be/files/cache/medium/files/top-1500-60cc6b1984834.jpg',
      bandName: 'Twenty one pilots',
      playDay: 'saturday'
    }
  ];
  // Define the application
  const app = {
    init() {
      console.log('1. Aplication initialized!');
      // call the function casheElements
      this.cacheElements();
    },
    cacheElements() {
      console.log('2. Cashe Elements!');
      // Get the node or element via querySelector with certain selectors
      this.lineupElement = document.querySelector('.lineup');
      console.log(this.lineupElement);
      this.digitalClockElement = document.querySelector('.digital-clock');
      console.log(this.digitalClockElement);

      // Call the function generateUI
      this.generateUI();
    },
    generateUI() {
      console.log('3. Generate User Interface');
      // Read the lineup data, convert it to an html string and inject it to the lineupElement via the property innerHTML
      this.lineupElement.innerHTML = lineup.map((concert) => `
        <div class="'concert">
            <h2 class="band">${concert.bandName}</h2>
            <picture class="picture">
                <img src="${concert.thumbnailUrl}" alt="thumbnail of artist.">
            </picture>
            <div class="playday">${concert.playDay}</div>
        </div>
       
      `).join('');

      // Generate Digital Clock.
      setInterval(() => {
        // make a new instance of Date object
        const currentDate = new Date();
        this.digitalClockElement.innerHTML = currentDate.toLocaleTimeString();
      }, 1000);
    }
  };
  // Call the init function (method) from the app object
  app.init();
})();