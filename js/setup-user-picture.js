const fileChooser = document.querySelector('.img-upload__input');
const imgagePreview = document.querySelector('.img-upload__preview img');

const FILE_TYPES = ['.jpg', '.jpeg', '.png'];

fileChooser.addEventListener('change', () => {
  const userFile = fileChooser.files[0];
  const userFileName = userFile.name.toLowerCase();

  const matches = FILE_TYPES.some((format) => userFileName.endsWith(format));

  if (matches) {
    imgagePreview.src = URL.createObjectURL(userFile);
  }
});