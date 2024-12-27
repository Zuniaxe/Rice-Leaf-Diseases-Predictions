// Fungsi untuk menangani perubahan gambar dari input file
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        // Membaca file dan menampilkan gambar
        reader.onload = function(e) {
            const uploadImage = document.getElementById('upload-image');
            uploadImage.src = e.target.result;  // Ganti sumber gambar dengan yang diupload
        };
        
        // Memulai proses membaca file
        reader.readAsDataURL(file);
    }
});

// Fungsi untuk menangani drag-and-drop
const dropArea = document.getElementById('drop-area');

dropArea.addEventListener('dragover', function(event) {
    event.preventDefault();
    dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', function() {
    dropArea.classList.remove('dragover');
});

dropArea.addEventListener('drop', function(event) {
    event.preventDefault();
    dropArea.classList.remove('dragover');
    
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        // Membaca file dan menampilkan gambar
        reader.onload = function(e) {
            const uploadImage = document.getElementById('upload-image');
            uploadImage.src = e.target.result;  // Ganti sumber gambar dengan yang diupload
        };
        
        // Memulai proses membaca file
        reader.readAsDataURL(file);
    }
});
