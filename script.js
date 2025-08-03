document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.querySelector('.btn-calculate');
  const clearBtn = document.querySelector('.btn-clear');
  const resultText = document.getElementById('result-text');
  const resultBox = document.getElementById('resultBox');
  const fromNode = document.getElementById('fromNode');
  const toNode = document.getElementById('toNode');
  const illustration = document.getElementById('illustration');
  const container = document.querySelector('.illustration-result-container');
  const card = document.querySelector('.card');

  clearBtn.addEventListener('click', function () {
    resultBox.style.display = 'none';
    illustration.style.display = 'flex';
    resultText.innerHTML = '';
    fromNode.value = '';
    toNode.value = '';
    container.classList.remove('show-result');
    card.style.height = 'auto';
  });

  calculateBtn.addEventListener('click', function () {
    const from = fromNode.value;
    const to = toNode.value;

    if (!from || !to) {
      alert('Please select both From and To nodes.');
      return;
    }

    const path = ['A', 'B', 'C', 'D'];
    const distance = 10;

    resultText.innerHTML = `
      From Node Name = “${from}”, To Node Name = ”${to}”:<br />
      ${path.join(', ')}<br />
      Total Distance: ${distance}
    `;

    illustration.style.display = 'none';
    resultBox.style.display = 'block';
    container.classList.add('show-result');
    card.style.minHeight = '480px';
  });
});
