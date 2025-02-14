// Function to handle image upload and prediction
document.getElementById('predictButton').addEventListener('click', function() {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];

    if (file) {
        // Placeholder for image processing and prediction logic
        const diseaseName = "Leaf Blight"; // Example disease name in English
        const diseaseNameHindi = "पत्ते की बीमारी"; // Example disease name in Hindi
        const treatmentRecommendation = "Use fungicide and ensure proper drainage."; // Example treatment recommendation

        // Display the results
        document.getElementById('plantName').innerText =  file.name;
        document.getElementById('diseaseName').innerText =   diseaseName + " (" + diseaseNameHindi + ")";
        document.getElementById('confidence').innerText = " 95"; // Example confidence percentage

        // Display treatment recommendation
        alert("Treatment Recommendation: " + treatmentRecommendation);
    } else {
        alert("Please upload an image.");
    }
});