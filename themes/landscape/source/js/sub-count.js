document.addEventListener('DOMContentLoaded', function () {
  var value = 2600;
  var sidebarInfo = document.getElementById('sidebar-subscribe');
  var counter = document.getElementById('sub-count');
  counter.innerHTML = value;

  setTimeout(function() {
    sidebarInfo.classList.add('shake');
  }, 1000);

  var interval = setInterval(function() {
    counter.innerHTML = value += Math.floor(Math.random() * 4) + 1;
    if (value >= 2780) {
      clearInterval(interval);
    }
  }, 10000);
})