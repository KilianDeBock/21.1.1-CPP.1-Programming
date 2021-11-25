(() => {
  const studentsData = [
    {
      'firstName': 'Evelien',
      'lastName': 'Parrent',
      'profilePicture': 'https://randomuser.me/api/portraits/women/72.jpg'
    },
    {
      'firstName': 'Olivier',
      'lastName': 'Rutsaert',
      'profilePicture': 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    {
      'firstName': 'Helena',
      'lastName': 'Zarzuela',
      'profilePicture': 'https://randomuser.me/api/portraits/women/35.jpg'
    },
    {
      'firstName': 'Veli',
      'lastName': 'Lugano',
      'profilePicture': 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  const app = {
    init() {
      console.log('1. Aplication Initialized!');
      // Cache the elements
      this.cacheElements();
      // Generate the user interface
      this.generateUI();
    },
    cacheElements() {
      console.log('2. Cache DOM elements!');
      // Cache the div element with class value students.
      this.$studentElement = document.querySelector('.students');
      this.$btnBackgroundElement = document.querySelector('.btn-background');

      this.$btnBackgroundElement.addEventListener('click', (ev) => {
        document.body.style.backgroundColor = `hsla(${Math.round(Math.random() * 360)},100%, 50%, 1`;
      }, false);
    },
    generateUI() {
      console.log('3. Generate User Interface!');
      // Generate students interface
      this.$studentElement.innerHTML = studentsData.map((student) => {
        return `
        <div class="student">
            <picture>
                <img class='picture' src='${student.profilePicture}'>
            </picture>
            <h2 class="name">${student.firstName} ${student.lastName}</h2>
        </div>`;
      }).join('');
    }
  };
  app.init();
})();