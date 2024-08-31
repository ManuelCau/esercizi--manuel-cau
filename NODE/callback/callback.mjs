import fs from 'fs';

//dichiaro il nome del file da creare e ciò che voglio sia contenuto
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }
  console.log('Scrittura eseguita!');
});