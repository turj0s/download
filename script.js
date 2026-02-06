const form = document.getElementById('downloadForm');
const sampleBtn = document.getElementById('sampleBtn');
const mediaUrl = document.getElementById('mediaUrl');
const progressBar = document.getElementById('progressBar');
const statusText = document.getElementById('statusText');
const toast = document.getElementById('toast');

const safeSamples = [
  'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  'https://vimeo.com/76979871',
  'https://example.com/media/photo.jpg'
];

document.getElementById('year').textContent = new Date().getFullYear();

sampleBtn.addEventListener('click', () => {
  const randomUrl = safeSamples[Math.floor(Math.random() * safeSamples.length)];
  mediaUrl.value = randomUrl;
  showToast('Sample link inserted.');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const url = mediaUrl.value.trim();
  if (!url) {
    showToast('Please add a media link first.');
    return;
  }

  try {
    new URL(url);
  } catch {
    showToast('Invalid URL format.');
    return;
  }

  runSimulatedPipeline(url);
});

function runSimulatedPipeline(url) {
  const steps = [
    { progress: 12, label: 'Validating source link…' },
    { progress: 26, label: 'Reading media metadata…' },
    { progress: 43, label: 'Selecting highest permitted quality…' },
    { progress: 67, label: 'Preparing export stream…' },
    { progress: 84, label: 'Finalizing container and codecs…' },
    { progress: 100, label: 'Ready: click your server download action.' }
  ];

  let i = 0;
  progressBar.style.width = '0%';

  const tick = () => {
    if (i >= steps.length) {
      showToast('Analysis complete. Integrate your backend endpoint to enable real download.');
      return;
    }

    progressBar.style.width = `${steps[i].progress}%`;
    statusText.textContent = steps[i].label;
    i += 1;
    setTimeout(tick, 600);
  };

  statusText.textContent = `Queued: ${shorten(url)}`;
  setTimeout(tick, 450);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function shorten(value) {
  return value.length > 64 ? `${value.slice(0, 61)}...` : value;
}
