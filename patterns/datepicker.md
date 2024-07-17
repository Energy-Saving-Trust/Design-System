---
title: Date picker
layout: content
section: patterns
---

# Date picker

Date picker documentation goes here.



## Date picker

{% capture code_render %}
<div id="myDatepicker" class="datepicker">
  <div class="date">
    <label for="id-textbox-1">Move in date</label>
    <p class="desc" id="id-description-1">Enter the date using the dd/mm/yyyy format. For example, 31/01/2024.</p>
    <div class="group">
      <input type="text" placeholder="mm/dd/yyyy" id="id-textbox-1" aria-describedby="id-description-1">
      <button type="button" class="icon" aria-label="Choose Date">
        <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.1 2.9H20.9V0.5H18.5V2.9H6.5V0.5H4.1V2.9H2.9C1.58 2.9 0.5 3.98 0.5 5.3V24.5C0.5 25.82 1.58 26.9 2.9 26.9H22.1C23.42 26.9 24.5 25.82 24.5 24.5V5.3C24.5 3.98 23.42 2.9 22.1 2.9ZM22.1 24.5H2.9V8.9H22.1V24.5Z" fill="white"/>
        </svg>
      </button>
    </div>
  </div>
  <div id="id-datepicker-1" class="datepicker-dialog" role="dialog" aria-modal="true" aria-label="Choose Date">
    <div class="header">
      <button type="button" class="prev-year" aria-label="previous year">
        <span class="fas fa-angle-double-left fa-lg"></span>
      </button>
      <button type="button" class="prev-month" aria-label="previous month">
        <span class="fas fa-angle-left fa-lg"></span>
      </button>
      <h2 id="id-grid-label" class="month-year" aria-live="polite">February 2020</h2>
      <button type="button" class="next-month" aria-label="next month">
        <span class="fas fa-angle-right fa-lg"></span>
      </button>
      <button type="button" class="next-year" aria-label="next year">
        <span class="fas fa-angle-double-right fa-lg"></span>
      </button>
    </div>
    <div class="table-wrap"><table class="dates" role="grid" aria-labelledby="id-grid-label">
        <thead>
          <tr>
            <th scope="col" abbr="Sunday">Su</th>
            <th scope="col" abbr="Monday">Mo</th>
            <th scope="col" abbr="Tuesday">Tu</th>
            <th scope="col" abbr="Wednesday">We</th>
            <th scope="col" abbr="Thursday">Th</th>
            <th scope="col" abbr="Friday">Fr</th>
            <th scope="col" abbr="Saturday">Sa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td tabindex="-1" data-date="2020-02-01">1</td>
          </tr>
          <tr>
            <td tabindex="-1" data-date="2020-02-02">2</td>
            <td tabindex="-1" data-date="2020-02-03">3</td>
            <td tabindex="-1" data-date="2020-02-04">4</td>
            <td tabindex="-1" data-date="2020-02-05">5</td>
            <td tabindex="-1" data-date="2020-02-06">6</td>
            <td tabindex="-1" data-date="2020-02-07">7</td>
            <td tabindex="-1" data-date="2020-02-08">8</td>
          </tr>
          <tr>
            <td tabindex="-1" data-date="2020-02-09">9</td>
            <td tabindex="-1" data-date="2020-02-10">10</td>
            <td tabindex="-1" data-date="2020-02-11">11</td>
            <td tabindex="-1" data-date="2020-02-12">12</td>
            <td tabindex="-1" data-date="2020-02-13">13</td>
            <td tabindex="0" data-date="2020-02-14" role="gridcell" aria-selected="true">14</td>
            <td tabindex="-1" data-date="2020-02-15">15</td>
          </tr>
          <tr>
            <td tabindex="-1" data-date="2020-02-16">16</td>
            <td tabindex="-1" data-date="2020-02-17">17</td>
            <td tabindex="-1" data-date="2020-02-18">18</td>
            <td tabindex="-1" data-date="2020-02-19">19</td>
            <td tabindex="-1" data-date="2020-02-20">20</td>
            <td tabindex="-1" data-date="2020-02-21">21</td>
            <td tabindex="-1" data-date="2020-02-22">22</td>
          </tr>
          <tr>
            <td tabindex="-1" data-date="2020-02-23">23</td>
            <td tabindex="-1" data-date="2020-02-24">24</td>
            <td tabindex="-1" data-date="2020-02-25">25</td>
            <td tabindex="-1" data-date="2020-02-26">26</td>
            <td tabindex="-1" data-date="2020-02-27">27</td>
            <td tabindex="-1" data-date="2020-02-28">28</td>
            <td tabindex="-1" data-date="2020-02-29">29</td>
          </tr>
          <tr>
            <td tabindex="-1" data-date="2020-02-30">30</td>
            <td tabindex="-1" data-date="2020-02-31">31</td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="dialog-ok-cancel-group">
      <button class="dialog-button" value="cancel">Cancel</button>
      <button class="dialog-button" value="ok">OK</button>
    </div>
    <div class="dialog-message" aria-live="polite"></div>
  </div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}