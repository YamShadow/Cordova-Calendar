<template>
  <section class="calendar">
      <div style="display:none;">{{timestamp}}</div>
      <h2><span class="btn" v-on:click="changeDate(0)"><</span> <span style="width: 200px; display: inline-block;">{{ month_name }} {{year}} </span> <span v-on:click="changeDate(1)" class="btn">></span></h2>
      <table id="js-calendar">
          <tr>
              <th>L</th>
              <th>M</th>
              <th>M</th>
              <th>J</th>
              <th>V</th>
              <th>S</th>
              <th>D</th>
          </tr>
          <tr v-for="(line, keyLine) in table_content">
              <td v-for="(row, keyRow) in line" v-bind:class="{ active: row.isActive, bullet: row.isBullet, passed: row.isPassed}" v-on:click="activeDay(keyLine, keyRow)">
                  <span class="calendar-day">{{ row.text }} </span>
              </td>
          </tr>
      </table>
  </section>
</template>

<script>

  var monthsNames = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  var month = 9;
  var year = 2018;

  export default {
    name: 'Calendar',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        month: month,
        year: year,
        month_name: monthsNames[month - 1],
        table_content: createCalendar(month, year),
        timestamp: 0
      }
    },
    methods: {
        activeDay: function(keyLine, keyBox) {
          var box = this.table_content[keyLine][keyBox];
          if (!box.noClick) {

          for (let x = 0; x < this.table_content.length; x++) {
            const line = this.table_content[x];
            for (let y = 0; y < line.length; y++) {
              const box = line[y];
              box.isActive = false;
            }
          }

          box.isActive = true;

          this.timestamp = Date.now();
          }

        },

        changeDate: function(operation){

          if (operation === 0) {
            this.month --;
          } else {
            this.month ++;
          }
          if (this.month >= 13) {
            this.month = 1;
            this.year ++;
          }

          if (this.month <= 0) {
            this.month = 12;
            this.year --;
          }

          this.table_content = createCalendar(this.month, this.year);
          this.month_name = monthsNames[this.month - 1];
        }
    },
  }
        var getDaysInMonth = function(month,year) {
            return new Date(year, month, 0).getDate();
        };

        function sameDay(d1, d2) {
            return d1.getFullYear() === d2.getFullYear() &&
                d1.getMonth() === d2.getMonth() &&
                d1.getDate() === d2.getDate();
        }

        function createCalendar(month, year) {
            var id = 0;
            var current_day = 0;
            var firstDay = new Date(month + '/1/' + year);
            var begin = firstDay.getDay();
            var lines = [];
            begin --;

            var nbDays = getDaysInMonth(month, year);

            var nbLines = Math.ceil((nbDays + begin) / 7);


            if (begin === -1) {
                begin = 6;
            }

            for (var y = 1; y <= nbLines; y++) {
                var line = [];

                for (var x = 1; x <= 7; x++) {
                    var box = {};
                    var text = '';

                    if (id >= begin && current_day < nbDays) {
                        current_day++;
                        text = current_day;
                    } else {
                      box.noClick = true;
                    }

                    box.text = text;
                    if (current_day > 0) {
                        
                        var currentDate = new Date(month + '/' + current_day + '/' + year);
                        var isToday = sameDay(currentDate, new Date());

                        if (currentDate < new Date() && !isToday) {
                          box.isPassed = true;
                        }

                        if (isToday) {
                            box.isActive = true;
                            box.isBullet = true;
                        }

                    }

                    id++;

                    line.push(box);
                }

                lines.push(line);
            }

            return lines;
        }

        function add_point(numDay) {
            // document.getElementById('box-' +  numDay).className = 'bullet';
        }
        add_point(22);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Reset CSS */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, 
big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, 
dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, 
canvas, details, embed, figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, 
mark, audio, video {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}


/* Reset pour les vieux navigateurs */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {display: block;}
body {line-height: 1;}
ol, ul {list-style: none;}
blockquote, q {quotes: none;}
blockquote:before, blockquote:after,q:before, q:after {content: '';content: none;}
table {border-collapse: collapse;border-spacing: 0;}


html, body {
    background: #f5f5f5;
    font-family: 'Metropolis', sans-serif;
}


header {
    background: lightblue;
    padding: 20px;
}

h1 {
    color: white;
    font-weight: bold;
    text-align: center;
}

.calendar {
    background: white;
}

.calendar table {
    width: 100%;
}

.calendar table th {
    width: calc(100% / 7);
    padding: 5px;
}

.calendar table th,
.calendar table td {
    position: relative;
    text-align: center;
    padding: 5px;
    padding-bottom: 30px;
    font-size: 14px;
}


.calendar h2 {
    text-transform: uppercase;
    text-align: center;
    padding: 20px 0;
}

.calendar table td.bullet:after {
    content: '';
    position: absolute;
    bottom: 18px;
    left: calc(50% - 3px);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: grey;
    margin: auto;
}

.calendar table td .calendar-day {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    font-weight: bold;
}

.calendar table td.active .calendar-day {
    background: grey;
    box-shadow: 0 0 10px rgba(100, 100, 100, 0.1);
    color: white;
}

.calendar table td.passed {
  opacity: 0.5;
}

.btn {
  display: inline-block;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #292929;
  color: white;
  font-weight: bold;
}
</style>
