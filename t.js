
YUI({ filter: "raw" }).use('node', 'router', 'app', 'model', 'view', 'plugin', 'console', 'parallel',function (Y) {
    // This AnchorPlugin is designed to be added to Node instances (the host will be a Node instance)

    var ctxConsole = new Y.Console({
        logSource: Y.Global,
        style: 'block',
        newestOnTop: false,
        width: "250px"
    }).render("#Debug");



    function AnchorPlugin(config) {

        // Hold onto the host instance (a Node in this case), 
        // for other plugin methods to use.
        this._node = config.host;
    }

    // When plugged into a node instance, the plugin will be 
    // available on the "anchors" property.
    AnchorPlugin.NS = "anchors";

    AnchorPlugin.prototype = {
        disable: function () {
            console.log("this is a xxxx");
            var node = this._node;
            var anchors = node.all("div");
        }
    };
    

    function widgetAnimPlugin(config) {
        widgetAnimPlugin.superclass.constructor.apply(this, arguments);
    }

    // Define Static properties NAME (to identify the class) and NS (to identify the namespace)
    widgetAnimPlugin.NAME = 'widgetAnimPlugin';
    widgetAnimPlugin.NS = 'fx';

    // Attribute definitions for the plugin
    widgetAnimPlugin.ATTRS = {

        animHidden : { value:4
     
    },

            animVisible: {value:"Hello world!"
    }
    };

    // Extend Plugin.Base
    Y.extend(widgetAnimPlugin, Y.Plugin.Base, {

        // Add any required prototype methods

    });
    
    
    var container = Y.one("body");
    container.plug(AnchorPlugin);
    container.plug(widgetAnimPlugin);
    container.anchors.disable();
    console.log(container.fx.get('animHidden'));    
    console.log(container.fx.get('animVisible'));    
    console.log(container.fx.get('animVisible'));


    Y.log('Hello world', 'info','xxxx');
    Y.log('Hello world', 'error');
    Y.log('Hello world', 'warn');
    ctxConsole.clearConsole();

    (function() {
        var sobject = {
             foo: function () { Y.log(".", "info"); }
            , stop: function () { if (this.s) {
                console.dir(this.s);
                                      this.s.cancel();

                                  } }
        };

        sobject.s = Y.later(1000, sobject, 'foo', [], true);
        
        Y.later(8000, sobject, 'stop', [], false);

        

    })();
    
    YUI.add('Xxxx', function (Y) {
        Y.Xxxx = {
            run: function () {
                alert("Xxxx");
            }
        }
    }, '1.0.0', { requires: ['node'] });

    YUI().use('*', function(Y) {
        Y.Xxxx.run();
    });

    (function(Y) {
        //type one
        function foo(name) {
            this.name = name ||"foo";
        }

        foo.prototype = {
             a: function () { Y.log("Hello world" + this.name, "info"); }
            ,b: function () { Y.log("Hello world" + this.name, "error"); }
            ,c: function () { Y.log("Hello world" + this.name, "warn"); }
        };
        
        function foobar(name) {
            foobar.superclass.constructor.call(this, name);
        }

        Y.extend(foobar, foo);
        var foos = new foobar("tanker");

        foos.a();
        foos.b();
        foos.c();

    })(Y);


    (function (Y) {
        function foo(name) {
            this.name = name || "foo";
            this.foox = function() { return "haha"; };
        }

        foo.prototype = {
            a: function() { Y.log("hello a" + this.name, + this.foox(), "info"); },
            aa: function() { Y.log("hello aa" , "info"); },
            aaa: function() { Y.log("hello aaa", "info"); }
        };

        function bar(){}

        Y.augment(bar, foo);

        var b = new bar();

        console.dir(b);
        Y.log(b.a());
        Y.log(b.aa());
        Y.log(b.aaa());

    })(Y);


    (function (Y) {
        var a = {
            geta :"a",
            demoa: function() {
            },
            demob: function() {
            },
            enda: "end"
            , fuck: function () { Y.log("hello world a", "error");
                alert(" fskd!");
            }
        };
        var b = {
            getb:"b",
            democ: function () {
            },
            demod: function() {
            }
            ,
            endc: "end"
            , fuck: function () { Y.log("Hello world b", "error"); }
        };

        var aa=  Y.mix(a, b);

        a.fuck();
        console.dir(aa);
    })(Y);


    (function(Y) {
        var set1 = { foo: "foo" };
        var set2 = { foo: "BAR", bar: "bar" };
        var set3 = { foo: "FOO", baz: "BAZ" };

        var setfull = Y.merge(set1, set2, set3);

        Y.log(setfull, "warn");
        console.dir(setfull);

    })(Y);


    (function() {

        function foo(){}

        Y.log(typeof null, "error");
        Y.log(typeof foo, "error");
        Y.log(typeof [], "error");
        Y.log(typeof {}, "error");
        Y.log(typeof 1, "error");
        Y.log(typeof 1.1, "error");
        Y.log(typeof Infinity, "error");
        Y.log(typeof undefined, "error");
        Y.log(Y.Lang.isArray([]), "error");
        Y.log(Y.UA, "info");
        console.dir(Y.UA);
  
    })(Y);
    
   

        var stack = new Y.Parallel();


    function fx() {
        for (var i = 0; i < 5; i += 1) {
            Y.later(i,null,
            stack.add(function() {
                Y.log("xxxxxxxx", 'warn');
            }));
        }
    }

    Y.later(1, null, fx);


    stack.done(function () {
            Y.log('Stack complete',"warn");
 });


    (function (Y) {
        
        function foo() {
            alert("foo");
        }

        Y.later(8000, null, foo, [], true);

    })(Y);

});
