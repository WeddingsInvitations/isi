// Animasi foto pasangan muncul dari atas saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
  const photo = document.querySelector('.couple-photo');
  if (photo) {
    setTimeout(() => {
      photo.style.opacity = '1';
      photo.style.transform = 'translateY(0)';
    }, 300); // Delay sedikit untuk efek halus
  }
});
