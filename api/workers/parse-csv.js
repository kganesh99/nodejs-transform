const fs = require('fs');
const csv = require('fast-csv');
const transformCSVData = require('./transfrom-csv-data');
const config = require('../../config/file-config');
module.exports = async (req, res, next) => {
  try {
    let fOutputJson = {},
      counter = 0,
      final = { data: [] };
    fs.createReadStream(config.file_path) // '../chicagoCodeTest/data/testcsv.csv')
      .pipe(
        csv({
          delimiter: ',',
          objectMode: true,
          ignoreEmpty: true,
          trim: true
        })
      )
      .on('data', async function(data) {
        if (data.length !== 0) {
          if (data) {
            let suffix = counter.toString();
            final.data.push(data);
            counter++;
          }
        }
      })
      .on('end', async function(data) {
        fOutputJson = await transformCSVData(final);
        console.log('Read Finished');
        res.set('Content-Type', 'application/json');
        return res.json(fOutputJson);
      });
  } catch (error) {
    next(error);
  }
};
