document.getElementById('generate-resume').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    // Capture other fields
    const resumePreview = document.getElementById('resume-preview');

    // Generate resume HTML
    resumePreview.innerHTML = `
        <h2>${name}</h2>
        <!-- Add more sections like education, experience, etc. -->
    `;
});

document.getElementById('name').addEventListener('input', function() {
    document.getElementById('preview-name').textContent = this.value || '[Your Name]';
});

document.getElementById('email').addEventListener('input', function() {
    document.getElementById('preview-email').textContent = this.value || '[Your Email]';
});