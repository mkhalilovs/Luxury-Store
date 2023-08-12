// Function for the delay between the images
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.preview__div');

// Function for creating new img element
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

const images = [
  'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/6648407/pexels-photo-6648407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/7700270/pexels-photo-7700270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3019008/pexels-photo-3019008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/14552606/pexels-photo-14552606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

// Function for demonstrating the pictures
const loadNPause = async function () {
  try {
    for (const image of images) {
      let img = await createImage(image);
      await wait(2.2);

      img.remove();
    }
  } catch (err) {
    console.error(err);
  }
  loadNPause();
};
loadNPause();
