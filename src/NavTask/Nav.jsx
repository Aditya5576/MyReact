import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_V-hL6viDA_wbwv6s7b8sUq3dbDEziXJtmQ&s"
            alt=""
          />
        </div>

        <div className="menu">
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">LOGIN</a>
            </li>
            <li>
              <a href="">SIGNUP</a>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <div className="sec1" id="sec1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum
            ea officiis veniam obcaecati veritatis molestiae nam sed rerum totam
            iure est, nesciunt laudantium a tempora autem nobis soluta, corporis
            sit dicta asperiores vel? Repellendus iure similique aut cumque quas
            possimus commodi mollitia repudiandae sed dolore! Asperiores minus
            officia ipsa?
          </p>
        </div>

        <div className="sec1" id="sec2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio amet
            fugiat odit nostrum perferendis porro repellendus ab minima eligendi
            odio dicta quidem omnis accusantium sed officiis non dolores
            repellat repudiandae facere, cumque a earum. Ex expedita,
            exercitationem omnis repudiandae provident sit. Inventore modi
            obcaecati ducimus illo nisi tempore minima quidem?
          </p>
        </div>
      </section>

      <footer>

        &copy;Copyright 2024


      </footer>
    </>
  );
};

export default Nav;
