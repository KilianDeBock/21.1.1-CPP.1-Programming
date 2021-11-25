// soundboard code 
const activeThemes = [];
soundboard.init(activeThemes);

// elementen declareren
const btnRecord = document.querySelector('#record');
const btnUpload = document.querySelector('#upload');
const fieldName = document.querySelector('#name');
const fieldTitle = document.querySelector('#title');
const playerWrapper = document.querySelector('#player');
const message = document.querySelector('#message');

micRecorder.init(128, playerWrapper);

// event listeners
btnRecord.addEventListener('click', micRecorder.start);
btnUpload.addEventListener('click', uploadAction);

// upload logica
async function uploadAction() {
    const location = 'https://start-to-code.cmsdevelopment.be/sweet.php';
    const name = fieldName.value;
    const title = fieldTitle.value;

    // upload
    const response = await micRecorder.upload(location, name, title);
    
    // show response to user
    message.innerHTML = response;

    // empty fields
    micRecorder.resetFields();

    // get new samples
    soundboard.fetchSampleData();
}