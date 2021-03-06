(function() {
  //###########################################################################################################
  var CND, badge, debug, rpr, test;

  CND = require('cnd');

  rpr = CND.rpr.bind(CND);

  badge = 'COFFEENODE-TEACUP';

  // log                       = CND.get_logger 'plain',     badge
  // info                      = CND.get_logger 'info',      badge
  // whisper                   = CND.get_logger 'whisper',   badge
  // alert                     = CND.get_logger 'alert',     badge
  debug = CND.get_logger('debug', badge);

  // warn                      = CND.get_logger 'warn',      badge
  // help                      = CND.get_logger 'help',      badge
  //...........................................................................................................
  /* https://github.com/goodeggs/teacup */
  test = require('guy-test');

  //-----------------------------------------------------------------------------------------------------------
  this["basics"] = function(T, done) {
    var _;
    _ = require('../..');
    T.eq(_.render(() => {
      return _.P('#id4', () => {
        return "helo";
      });
    }), `<p id="id4">helo</p>`);
    T.eq(_.render(() => {
      return _.DIV('.foo.bar', () => {
        return "some text";
      });
    }), `<div class="foo bar">some text</div>`);
    /* one of the reasons we're dropping support for this is seen below: */
    T.eq(_.render(() => {
      return _.H2('#helo');
    }), `<h2 id="helo"></h2>`);
    T.eq(_.render(() => {
      return _.H2('.helo');
    }), `<h2 class="helo"></h2>`);
    T.eq(_.render(() => {
      return _.H2('helo');
    }), `<h2>helo</h2>`);
    T.eq(_.render(() => {
      return _.H2('#helo and then some');
    }), `<h2 id="helo and then some"></h2>`);
    return done();
  };

  //###########################################################################################################
  if (module === require.main) {
    (() => {
      return test(this);
    })();
  }

}).call(this);

//# sourceMappingURL=main.test.js.map