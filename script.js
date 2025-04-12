
let differences = [];
let found = 0;
let total = 0;

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById("game-title").textContent = data.gameTitle;
    total = data.differences.length;
    differences = data.differences.map(d => ({ ...d, found: false }));

    const img1 = document.getElementById('image1-wrapper');
    const img2 = document.getElementById('image2-wrapper');
    img1.style.backgroundImage = `url(${data.images.image1})`;
    img2.style.backgroundImage = `url(${data.images.image2})`;

    [img1, img2].forEach(wrapper => {
      wrapper.addEventListener('click', event => {
        const rect = wrapper.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        checkClick(x, y, wrapper);
      });
    });
  });

function checkClick(x, y, wrapper) {
  differences.forEach((diff, index) => {
    if (!diff.found &&
        x >= diff.x && x <= diff.x + diff.width &&
        y >= diff.y && y <= diff.y + diff.height) {

      diff.found = true;
      found++;
      document.getElementById('score').textContent = `Found: ${found}`;

      const mark = document.createElement('div');
      mark.className = 'marker';
      mark.style.left = `${diff.x}px`;
      mark.style.top = `${diff.y}px`;
      mark.style.width = `${diff.width}px`;
      mark.style.height = `${diff.height}px`;
      wrapper.appendChild(mark);

      if (found === total) {
        document.getElementById('message').textContent = "Congratulations! You found all differences!";
      }
    }
  });
}
