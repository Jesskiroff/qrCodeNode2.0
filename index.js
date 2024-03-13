import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([{
    message:"What URL shall I turn into a QR code for you? ", 
    name:"URL",
  },
])
  .then((answers) => {
  //  console.log(answers)
  const url = answers.URL
  var qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream('my_qr_img.png'));

  fs.writeFile('machinereply.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



  // The code below id totally from the qr-image npm module which i've used in my code above, only modified
  //var qr_svg = qr.image(url /*A const which I created at an earlier step*/); //{ type: 'svg' }I am not using this option bc this module defaults to creating a png image);
  //qr_svg.pipe(fs.createWriteStream('my_qr_img.png'));
  
