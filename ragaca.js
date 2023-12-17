<header class="header">
      <nav>
        <div class="header__logo">
          <img class="header__logo--img" src="./image1.png" alt="logo" />
          <h1 class="header__logo--text">
            <span>Company</span>
            <span>Name</span>
          </h1>
        </div>

        <ul class="header__actions">
          <li class="header__actions--item active">
            <a href="#">Home</a>
          </li>
          <li class="header__actions--item">
            <a href="#">Services</a>
          </li>
          <li class="header__actions--item">
            <a href="#">Projects</a>
          </li>
          <li class="header__actions--item">
            <a href="#">About</a>
          </li>
          <li class="header__actions--item">
            <a href="#">Contact</a>
          </li>
        </ul>

          <div id="burger-menu">
            <span></span>
          </div>
          <div id="menu">
            <ul>
              <li class="header__actions--item active">
                <a href="#">Home</a>
              </li>
              <li class="header__actions--item">
                <a href="#">Services</a>
              </li>
              <li class="header__actions--item">
                <a href="#">Projects</a>
              </li>
              <li class="header__actions--item">
                <a href="#">About</a>
              </li>
              <li class="header__actions--item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>





          @media screen and (max-width: 1270px) {
            .header {
              flex-direction: column;
              align-items: center;
            }
          
            .header__logo--img1 {
              display: unset;
            }
            .header__searchbox {
              display: none;
            }
            .header__actions {
              display: none;
              flex-direction: column;
              height: 0;
              overflow: hidden;
            }
            .header__logo {
              justify-content: space-between;
            }
            .header {
              position: relative;
            }
          
            .header__actions--item {
              margin: 16px 0;
            }
            .header__actions {
              left: 0;
            }
          
            .header__actions {
              position: fixed;
              left: -100%;
              top: 70px;
              gap: 0;
              flex-direction: column;
              background-color: #262626;
              width: 100%;
              text-align: center;
              transition: 0.3s;
            }
            .header__actions--item {
              margin: 16px 0;
            }
            .header__actions.active {
              left: 0;
            }



            @media (min-width: 1270px) {
                #burger-menu {
                  display: none;
                }
              }




              var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
