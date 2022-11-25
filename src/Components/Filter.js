import "./Filter.css";

function Filter() {
  return (
    <div class="filter-menu">
      <h1>Filter</h1>
      <ul class="no-bullet">
        <li>
          <div class="title">Color</div>
          <div class="key color">
            <ul class="no-bullet">
              <li>
                <a class="option" href="/">
                  White
                </a>
              </li>
              <li>
                <a class="option" href="/">
                  Blue
                </a>
              </li>
              <li>
                <a class="option" href="/">
                  Black
                </a>
              </li>
              <li>
                <a class="option" href="/">
                  Red
                </a>
              </li>
              <li>
                <a class="option" href="/">
                  Green
                </a>
              </li>
              <li>
                <a class="option" href="/">
                  MultiColor
                </a>
              </li>
              <li>
                <a class="option" href="/">
                  ColorLess
                </a>
              </li>
              <li>
                <a class="option" href="/">
                  Land
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
