document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.querySelector('.btn-calculate');
  const clearBtn = document.querySelector('.btn-clear');
  const resultText = document.getElementById('resultText');
  const resultBox = document.getElementById('result-box');
  const resultContainer = document.getElementById('resultContainer');
  const illustration = document.getElementById('illustration');
  const fromNode = document.getElementById('fromNode');
  const toNode = document.getElementById('toNode');

  clearBtn.addEventListener('click', function () {
    resultBox.style.display = 'none';
    illustration.style.display = 'flex';
    resultText.innerHTML = '';
    fromNode.value = '';
    toNode.value = '';
  });

  calculateBtn.addEventListener('click', () => {
    const from = fromNode.value;
    const to = toNode.value;

    if (!from || !to) {
      alert('Please select both From and To nodes.');
      return;
    }

    // Dummy path and distance for demonstration
    const path = ['A', 'B', 'C', 'D'];
    const distance = 10;

    resultText.innerHTML = `
      From Node Name = “${from}”, To Node Name = ”${to}”:<br />
      ${path.join(', ')}<br />
      Total Distance: ${distance}
    `;

    // Toggle views
    if (illustration) illustration.style.display = 'none';
    if (resultContainer) resultContainer.style.display = 'block';
  });
});
