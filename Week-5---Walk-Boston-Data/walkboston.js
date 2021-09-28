function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + "<h2>" + people[i][8] + "</h2>" + "<h3>" + people[i][11] + "</h3>";
  }

  container.innerHTML = '<ul id = "data">' + html + "</ul>";

}

  function renderTopSalaries(boston, container1) {
    const people = boston.data;
    var topSalaries = people.sort((a,b) => b[11] - a[11]).slice(0, 5);
    const len = topSalaries.length;
    let html = '';
    for (let i = 0; i < len; i++) {
      html += '<li class="post">' + '<h2>' + topSalaries[i][8] + '</h2>' + '<h3>' + topSalaries[i][11] + '</h3>';
    }
    container.innerHTML = '<ul id = "data">' + html + '</ul>';
  }

  function renderTopEmployees(boston, container2) {
    const people = boston.data;
    var topEmployees = people.filter(people => people[11] > 200000);
    const len = topEmployees.length;
    let html = '';
    for (let i = 0; i < len; i++) {
      html += '<li class="post">' + '<h2>' + topEmployees[i][8] + '</h2>' + '<h3>' + topEmployees[i][11] + '</h3>';
    }
    container.innerHTML = '<ul id = "data">' + html + '</ul>';
  }


renderPosts(boston, document.getElementById('container'));
renderTopSalaries(boston, document.getElementById('container1'));
//renderTopEmployees(boston, document.getElementById('container2'));
