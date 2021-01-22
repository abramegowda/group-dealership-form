$(document).ready(function() {
  var obj = [{
    name: 'Country II',
    date: 'January 2022'
  }, {
    name: 'Frank Leta Acura Demo',
    date: ''
  }, {
    name: 'Country II',
    date: 'May 2020'
  }, {
    name: 'Frank Leta Acura Demo',
    date: ''
  }, {
    name: 'Country II',
    date: 'August 2020'
  }, {
    name: 'Frank Leta Acura Demo',
    date: 'April 2025'
  }, {
    name: 'Country II',
    date: 'January 2020'
  }, {
    name: 'Frank Leta Acura Demo',
    date: ''
  }, {
    name: 'Country II',
    date: 'December 2021'
  }, {
    name: 'Frank Leta Acura Demo',
    date: ''
  }];

  obj.forEach((item, key) => {
    console.log(key);
    var { name, date } = item;
    var row;
    if(date) {
      row = '<tr>' +
        '<td><input id=check' + key + ' class="checkbox" type="checkbox" name="checkbox1"></td>' +
        '<td>' + name + '</td>' +
        '<td>' +
        '<span>' + date + '</span>' +
        '<button data-for=check' + key + ' class="edit-button">' +
        '<img src="choose-implementation-images/edit.svg" /></button>' +
        '<button data-for=check' + key + ' class="clear-date">' +
        '<img  src="choose-implementation-images/reset-date.svg" /></button>' +
        '</td>' +
        '</tr>';
    } else {
      row = '<tr>' +
        '<td><input id=check' + key + ' class="checkbox" type="checkbox" name="checkbox1"></td>' +
        '<td>' + name + '</td>' +
        '<td>' +
        '<button data-for=check' + key + ' class="select-date-text">Select Date' +
        '</button>' +
        '</td>' +
        '</tr>';
    }
    $('.dealership-table table tbody').append(row);
  });

  $('#calendar-input').datepicker({
    format: 'MM yyyy',
    viewMode: "months",
    minViewMode: "months",
    container: '.right-section',
    startDate: 'January 2012'
  });

  var elem = document.querySelector('.datepicker.dropdown-menu');
  document.querySelector('.right-section').appendChild(elem);

  function shouldShowCalendar() {
    if($('.checkbox').is(":checked")) {
      $('.right-section .box').hide();
      $('.right-section .datepicker.dropdown-menu').removeClass('mask-calendar');
      $('.reset').prop('disabled', false);
    } else {
      $('.right-section .datepicker.dropdown-menu').addClass('mask-calendar');
      $('.right-section .box').show();
      $('.reset').prop('disabled', true);
    }
  }

  shouldShowCalendar();

  $(".reset").click(function() {
    $('#calendar-input').val("").datepicker("update");
  });

  $("#selectAll").click(function() {
    $(".checkbox").prop('checked', $(this).prop('checked'));
    shouldShowCalendar();
  });

  $(document).on('click', '.checkbox', function() {
    shouldShowCalendar();
  });

  $(document).on('click', '.edit-button', function() {
    var id = $(this).attr('data-for');
    $('#' + id).prop('checked', true);
    shouldShowCalendar();
  })

  $(document).on('click', '.clear-date', function() {
    var id = $(this).attr('data-for');
    console.log(id)
    // $('#' + id).prop('checked', true);
    var innerHTML = "<button data-for=" + id + " class='select-date-text'>Select Date</button>";
    $(`button[data-for=${id}`).parent().empty().append(innerHTML);
    shouldShowCalendar();
  })

  $(document).on('click', '.select-date-text', function() {
    var id = $(this).attr('data-for');
    $('#' + id).prop('checked', true);
    shouldShowCalendar();
  })

  $('.month').click(function() {
    setTimeout(function() {
      var selectedDate = $('#calendar-input').val();
      var checkRows = $('.checkbox:checkbox:checked');
      checkRows.each((row, item) => {
        var id = $(item).attr('id');
        var innerHTML = selectedDate + "<button data-for=" + id + " class='edit-button'><img src='choose-implementation-images/edit.svg' /></button> <button data-for=" + id + " class='clear-date'><img src = 'choose-implementation-images/reset-date.svg' /></button >";
        $(`button[data-for=${id}`).parent().empty().append(innerHTML);
      });
    }, 50);
  })
});
