function expandItem(event, id) {
  if(document.getElementById(id).style.display == "none") {
    document.getElementById(id).style.display = "block";
    event.target.classList.add("rotate-arrow");
  } else {
    document.getElementById(id).style.display = "none";
    event.target.classList.remove("rotate-arrow");
  }
}

function expandItemOem(event, id) {
  if(document.getElementById(id).style.display == "none") {
    document.getElementById(id).style.display = "block";
    event.target.classList.add("rotate-arrow-oem");
  } else {
    document.getElementById(id).style.display = "none";
    event.target.classList.remove("rotate-arrow-oem");
  }
}

function handleActive(event, id) {
  var row = document.getElementById(id);
  if(!row.nextElementSibling.classList.contains('in')) {
    setTimeout(function() {
      row.classList.add('activeRow');
      row.querySelector('.td-button').querySelector('.blue').classList.add('hide');
      row.querySelector('.td-button').querySelector('.blue').classList.remove('show');

      row.querySelector('.td-button').querySelector('.pink').classList.add('show');
      row.querySelector('.td-button').querySelector('.pink').classList.remove('hide');
    }, 10);
  } else {
    setTimeout(function() {
      row.classList.remove('activeRow');
      row.querySelector('.td-button').querySelector('.blue').classList.add('show');
      row.querySelector('.td-button').querySelector('.blue').classList.remove('hide');

      row.querySelector('.td-button').querySelector('.pink').classList.add('hide');
      row.querySelector('.td-button').querySelector('.pink').classList.remove('show');
    }, 500);
  }
}