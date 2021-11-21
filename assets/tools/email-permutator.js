var _fn, _fni, _ln, _lni, _mn, _mni, _nn, _nni, _d, _ee;
var _output = new Array();

function permutate_basics() {
  _ee = '@' + _d;

  _output.push(_fn + _ee); // First Name
  checkNN(_nn + _ee); // Nick Name
  _output.push(_ln + _ee); // {ln}
  _output.push(_fn + _ln + _ee); // {fn}{ln}
  checkNN(_nn + _ln + _ee); // {nn}{ln}
  _output.push(_fn + '.' + _ln + _ee); // {fn}.{ln}
  checkNN(_nn + '.' + _ln + _ee); // {nn}.{ln}
  _output.push(_fni + _ln + _ee); // {fi}{ln}
  checkNI(_nni + _ln + _ee); // {ni}{ln}
  _output.push(_fni + '.' + _ln + _ee); // {fi}.{ln}
  checkNI(_nni + '.' + _ln + _ee); // {ni}.{ln}
  _output.push(_fn + _lni + _ee); // {fn}{li}
  checkNN(_nn + _lni + _ee); // {nn}{li}
  _output.push(_fn + '.' + _lni + _ee); // {fn}.{li}
  checkNN(_nn + '.' + _lni + _ee); // {nn}.{li}
  _output.push(_fni + _lni + _ee); // {fi}{li}
  checkNI(_nni + _lni + _ee); // {ni}{li}
  _output.push(_fni + '.' + _lni + _ee); // {fi}.{li}
  checkNI(_nni + '.' + _lni + _ee); // {ni}.{li}
}

function permutate_backwards() {
  _ee = '@' + _d;

  _output.push(_ln + _fn + _ee); // {ln}{fn}
  checkNN(_ln + _nn + _ee); // {ln}{nn}
  _output.push(_ln + '.' + _fn + _ee); // {ln}.{fn}
  checkNN(_ln + '.' + _nn + _ee); // {ln}.{nn}
  _output.push(_ln + _fni + _ee); // {ln}{fi}
  checkNI(_ln + _nni + _ee); // {ln}{ni}
  _output.push(_ln + '.' + _fni + _ee); // {ln}.{fi}
  checkNI(_ln + '.' + _nni + _ee); // {ln}.{ni}
  _output.push(_lni + _fn + _ee); // {li}{fn}
  checkNN(_lni + _nn + _ee); // {li}{nn}
  _output.push(_lni + '.' + _fn + _ee); // {li}.{fn}
  checkNN(_lni + '.' + _nn + _ee); // {li}.{nn}
  _output.push(_lni + _fni + _ee); // {li}{fi}
  checkNI(_lni + _nni + _ee); // {li}{ni}
  _output.push(_lni + '.' + _fni + _ee); // {li}.{fi}
  checkNI(_lni + '.' + _nni + _ee); // {li}.{ni}
}

function permutate_middle() {
  _ee = '@' + _d;

  checkMidIn(_fni + _mni + _ln + _ee); // {fi}{mi}{ln}
  checkNIandMI(_nni + _mni + _ln + _ee); // {ni}{mi}{ln}
  checkMidIn(_fni + _mni + '.' + _ln + _ee); // {fi}{mi}.{ln}
  checkNIandMI(_nni + _mni + '.' + _ln + _ee); // {ni}{mi}.{ln}
  checkMidIn(_fn + _mni + _ln + _ee); // {fn}{mi}{ln}
  checkNNandMI(_nn + _mni + _ln + _ee); // {nn}{mi}{ln}
  checkMidIn(_fn + '.' + _mni + '.' + _ln + _ee); // {fn}.{mi}.{ln}
  checkNNandMI(_nn + '.' + _mni + '.' + _ln + _ee); // {nn}.{mi}.{ln}
  checkMidNam(_fn + _mn + _ln + _ee); // {fn}{mn}{ln}
  checkNNandMN(_nn + _mn + _ln + _ee); // {nn}{mn}{ln}
  checkMidNam(_fn + '.' + _mn + '.' + _ln + _ee); // {fn}.{mn}.{ln}
  checkNNandMN(_nn + '.' + _mn + '.' + _ln + _ee); // {nn}.{mn}.{ln}
}

function permutate_dashes() {
  _ee = '@' + _d;

  _output.push(_fn + '-' + _ln + _ee); // {fn}-{ln}
  checkNN(_nn + '-' + _ln + _ee); // {nn}-{ln}
  _output.push(_fni + '-' + _ln + _ee); // {fi}-{ln}
  checkNI(_nni + '-' + _ln + _ee); // {ni}-{ln}
  _output.push(_fn + '-' + _lni + _ee); // {fn}-{li}
  checkNN(_nn + '-' + _lni + _ee); // {nn}-{li}
  _output.push(_fni + '-' + _lni + _ee); // {fi}-{li}
  checkNI(_nni + '-' + _lni + _ee); // {ni}-{li}
  _output.push(_ln + '-' + _fn + _ee); // {ln}-{fn}
  checkNN(_ln + '-' + _nn + _ee); // {ln}-{nn}
  _output.push(_ln + '-' + _fni + _ee); // {ln}-{fi}
  checkNI(_ln + '-' + _nni + _ee); // {ln}-{ni}
  _output.push(_lni + '-' + _fn + _ee); // {li}-{fn}
  checkNN(_lni + '-' + _nn + _ee); // {li}-{nn}
  _output.push(_lni + '-' + _fni + _ee); // {li}-{fi}
  checkNI(_lni + '-' + _nni + _ee); // {li}-{ni}
  checkMidIn(_fni + _mni + '-' + _ln + _ee); // {fi}{mi}-{ln}
  checkNIandMI(_nni + _mni + '-' + _ln + _ee); // {ni}{mi}-{ln}
  checkMidIn(_fn + '-' + _mni + '-' + _ln + _ee); // {fn}-{mi}-{ln}
  checkNNandMI(_nn + '-' + _mni + '-' + _ln + _ee); // {nn}-{mi}-{ln}
  checkMidNam(_fn + '-' + _mn + '-' + _ln + _ee); // {fn}-{mn}-{ln}
  checkNNandMN(_nn + '-' + _mn + '-' + _ln + _ee); // {nn}-{mn}-{ln}
}

function permutate_underscore() {
  _ee = '@' + _d;

  _output.push(_fn + '_' + _ln + _ee); // {fn}_{ln}
  checkNN(_nn + '_' + _ln + _ee); // {nn}_{ln}
  _output.push(_fni + '_' + _ln + _ee); // {fi}_{ln}
  checkNI(_nni + '_' + _ln + _ee); // {ni}_{ln}
  _output.push(_fn + '_' + _lni + _ee); // {fn}_{li}
  checkNN(_nn + '_' + _lni + _ee); // {nn}_{li}
  _output.push(_fni + '_' + _lni + _ee); // {fi}_{li}
  checkNI(_nni + '_' + _lni + _ee); // {ni}_{li}
  _output.push(_ln + '_' + _fn + _ee); // {ln}_{fn}
  checkNN(_ln + '_' + _nn + _ee); // {ln}_{nn}
  _output.push(_ln + '_' + _fni + _ee); // {ln}_{fi}
  checkNI(_ln + '_' + _nni + _ee); // {ln}_{ni}
  _output.push(_lni + '_' + _fn + _ee); // {li}_{fn}
  checkNN(_lni + '_' + _nn + _ee); // {li}_{nn}
  _output.push(_lni + '_' + _fni + _ee); // {li}_{fi}
  checkNI(_lni + '_' + _nni + _ee); // {li}_{ni}
  checkMidIn(_fni + _mni + '_' + _ln + _ee); // {fi}{mi}_{ln}
  checkNIandMI(_nni + _mni + '_' + _ln + _ee); // {ni}{mi}_{ln}
  checkMidIn(_fn + '_' + _mni + '_' + _ln + _ee); // {fn}_{mi}_{ln}
  checkNNandMI(_nn + '_' + _mni + '_' + _ln + _ee); // {nn}_{mi}_{ln}
  checkMidNam(_fn + '_' + _mn + '_' + _ln + _ee); // {fn}_{mn}_{ln}
  checkNNandMN(_nn + '_' + _mn + '_' + _ln + _ee); // {nn}_{mn}_{ln}
}

function normalize(str) {
  try {
    return str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
  } catch (err) {
    return str;
  }
}

function permutate() {
  // Do the permutations
  _output = [];

  // Put the form field data into variables
  _fn = normalize($('#firstname').val().trim().toLowerCase());
  _fni = _fn.charAt(0);
  _ln = normalize($('#lastname').val().trim().toLowerCase());
  _lni = _ln.charAt(0);
  _nn = normalize($('#nickname').val().trim().toLowerCase());
  _nni = _nn.charAt(0);
  _mn = normalize($('#middlename').val().trim().toLowerCase());
  _mni = _mn.charAt(0);
  _d = normalize($('#domain').val().trim().toLowerCase());

  // Run each category of email permutation
  permutate_basics();
  permutate_backwards();
  permutate_middle();
  permutate_dashes();
  permutate_underscore();

  $('#result').val(_output.join('\n'));
  $('#counter').text(_output.length);
}

function checkRequired() {
  var blanks = $('input[required]').map(function () {
    return $(this).val() == '';
  });
  return $.inArray(true, blanks) !== -1;
}

function checkNN(formula) {
  if (_nn !== '' && _nn !== _fn) {
    _output.push(formula);
  }
}

function checkNI(formula) {
  if (_nni !== '' && _nni !== _fni) {
    _output.push(formula);
  }
}

function checkMidIn(formula) {
  if (_mni !== '') {
    _output.push(formula);
  }
}

function checkMidNam(formula) {
  if (_mn !== '' && _mn !== _mni) {
    _output.push(formula);
  }
}

function checkNIandMI(formula) {
  if (_nni !== '' && _nni !== _fni && _mni !== '') {
    _output.push(formula);
  }
}

function checkNNandMI(formula) {
  if (_nn !== '' && _nn !== _fn && _mni !== '') {
    _output.push(formula);
  }
}

function checkNNandMN(formula) {
  if (_nn !== '' && _nn !== _fn && _mn !== '' && _mn !== _mni) {
    _output.push(formula);
  }
}

$('input[required]').keyup(function () {
  if ($(this).val() !== '') {
    $(this).removeClass('is-invalid');
  }
});

// Start permutations
$('#btn-permutate').click(function (e) {
  e.preventDefault();

  // Validation
  if (checkRequired()) {
    $('input[required]').each(function () {
      if ($(this).val() == '') $(this).addClass('is-invalid');
    });

    return;
  }

  permutate();
});

$('#btn-more').click(function (e) {
  e.preventDefault();

  $('#more-options').toggleClass('d-none');

  var text = $(this).text();
  $(this).text(text === 'More settings' ? 'Less settings' : 'More settings');
});

$('.clipboard-copy').each(function () {
  $(this).click(function (e) {
    var _this = $(this);
    _this.attr('data-original-title', 'Copied!').tooltip('update').tooltip('show');

    setTimeout(function () {
      _this.attr('data-original-title', 'Copy to clipboard').tooltip('update').tooltip('hide');
    }, 1000);
    try {
      navigator.clipboard.writeText($('#result').val());
    } catch (err) {
      console.error(err);
    }
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(permutate);
