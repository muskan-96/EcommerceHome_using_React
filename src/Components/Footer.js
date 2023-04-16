import './Footer.css';

export function Footer() {

  return (
    <footer>
      <div className="foot1">
        <div className="container-fluid">
          <div className="foot-container">
            <div>
              <ul>
                <li>
                  <a
                    href="Women.html"
                    style={{ fontWeight: "bolder", color: "white" }}
                  >
                    Women
                  </a>
                </li>
                <li>
                  <a href="dresses.html">Dresses</a>
                </li>
                <li>
                  <a href="Pants.html">Pants</a>
                </li>
                <li>
                  <a href="skirts.html">Skirts</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a
                    href="Men.html"
                    style={{ fontWeight: "bolder", color: "white" }}
                  >
                    Men
                  </a>
                </li>
                <li>
                  <a href="shirt.html">Shirts</a>
                </li>
                <li>
                  <a href="Pants.html">Pants</a>
                </li>
                <li>
                  <a href="hoodies.html">Hoodies</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a
                    href="kids.html"
                    style={{ fontWeight: "bolder", color: "white" }}
                  >
                    kids
                  </a>
                </li>
                <li>
                  <a href="shirt.html">Shirts</a>
                </li>
                <li>
                  <a href="Pants.html">Pants</a>
                </li>
                <li>
                  <a href="hoodies.html">Hoodies</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#" style={{ fontWeight: "bolder", color: "white" }}>Links</a>
                </li>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <hr style={{ color: "rgb(247, 236, 236)" }} />
          <h6
            style={{
              textAlign: "center",
              color: "rgb(247, 247, 247)",
              padding: "0px 0px 5px 0px"
            }}
          >
            <i> Copyright© Ecommerce 2022-23 </i>
          </h6>
        </div>
      </div>
    </footer>
  );

}
