// Optional: JS can go here if needed later
console.log("Mullvad setup page loaded.");

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
      const code = button.nextElementSibling.querySelector('code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        button.innerText = 'Copied!';
        setTimeout(() => button.innerText = 'Copy', 2000);
      });
    });
  });