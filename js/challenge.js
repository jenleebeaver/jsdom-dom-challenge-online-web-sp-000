//The timer increments every second once the page has loaded.

// turns nodes into an array
function _toConsumableArray(a) {
  if (Array.isArray(a)) {
    for (var b = 0, c = Array(a.length); b < a.length; b++)
    c[b]=a[b];
    return c
  }
    return Array.from(a)
  }

    var playing =! 0,

    timer = function() {
      return setInterval(function() {
        var a = document.getElementById("counter"),
        b = parseInt(a.innerText);
        a.innerText = b+1}, 1e3)},

//grabbing html
        interval = timer(),
        minus = document.getElementById("minus"),
        plus = document.getElementById("plus"),
        heart = document.getElementById("heart"),
        pause = document.getElementById("pause"),
        commentForm = document.getElementsByTagName("form")[0];

//subtracting a second from the timer
        minus.addEventListener("click", function() {
          var a = document.getElementById("counter"),
          b = parseInt(a.innerText);
          a.innerText = b-1
        }),

//adding a second to the timer
        plus.addEventListener("click",function() {
            var a=document.getElementById("counter"),
            b=parseInt(a.innerText);
            a.innerText=b+1
          }),
          
        heart.addEventListener("click",function() {
              var a=document.getElementById("counter"),
              b = parseInt(a.innerText),
              c=document.querySelector(".likes"),
              d=void 0;
              if ([].concat(_toConsumableArray(c.children)).map(function(a) {
                return parseInt(a.dataset.num)}).includes(b)){d=document.querySelector('[data-num="'+b+'"]');
                var e = parseInt(d.children[0].innerText);
                d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}
              else
                (d=document.createElement("li")).setAttribute("data-num",b),
                d.innerHTML=b+" has been liked <span>1</span> time",
                c.appendChild(d)}),
                pause.addEventListener("click",
                  function() {
                    playing ? (playing =! 1,
                      clearInterval(interval),
                      this.innerText="resume") : (playing =! 0, interval = timer(), this.innerText="pause"),
                [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)
              })
              }),

                commentForm.addEventListener("submit", function(a) {a.preventDefault();
                  var b = this.children[0],
                  c = b.value;
                  b.value = "";
                  var d=document.querySelector(".comments"),
                  e=document.createElement("p");
                  e.innerText=c,d.appendChild(e)
                });
