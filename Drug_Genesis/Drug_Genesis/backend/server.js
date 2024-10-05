const express = require('express');
const cors = require('cors');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors());
const upload = multer({ dest: 'uploads/' });

app.post('/api/upload', upload.single('file'), (req, res) => {
    const results = [];
    const drugName = req.body.drugName;

    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            fs.unlinkSync(req.file.path); // Delete the file after processing
            const similarDrugs = findSimilarDrugs(drugName, results); // Implement this function
            res.json({ similarDrugs });
        });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Function to find similar drugs (implement your logic here)
const findSimilarDrugs = (drugName, data) => {
    // Example logic: filter based on a property in the CSV data
    return data.filter(drug => drug.name.includes(drugName));
};
