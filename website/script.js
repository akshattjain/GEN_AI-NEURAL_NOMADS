// Function to parse CSV and generate compound cards
function parseCSV(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        const rows = text.split('\n');
        
        let compoundList = document.getElementById('compoundList');
        compoundList.innerHTML = ''; // Clear previous content

        rows.forEach((row, index) => {
            if (index === 0) return; // Skip header row

            const columns = row.split(','); // Assuming CSV is comma-separated
            if (columns.length >= 2) {
                const compoundName = columns[0];
                const description = columns[1];
                
                // Create and append compound card
                const card = document.createElement('div');
                card.className = 'compound-card';
                card.innerHTML = `
                    <h3>${compoundName}</h3>
                    <p>${description}</p>
                `;
                compoundList.appendChild(card);
            }
        });
    };
    reader.readAsText(file);
}

document.getElementById('csvFileInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        document.getElementById('uploadStatus').textContent = `Uploaded: ${file.name}`;
        document.getElementById('uploadStatus').style.color = "green";

        // Parse CSV file and generate compound cards
        parseCSV(file);
    } else {
        document.getElementById('uploadStatus').textContent = '';
    }
});
