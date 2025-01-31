import React from "react";
import "./About.css";
import about from "../../assets/somakodi-about.jpg";

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h3>About Us</h3>
        <div className="about-content">
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              eveniet sequi autem ipsam alias magnam magni! Officia nostrum quia
              similique adipisci maxime enim perferendis numquam eius, quos
              saepe quas unde dignissimos, ducimus obcaecati eligendi molestias?
              Aliquam ut recusandae labore omnis vero sunt aspernatur nesciunt
              sit. Eaque dolorem dolore vero impedit, in ratione reiciendis
              repellendus distinctio quod odit officiis rem enim eligendi
              laudantium alias inventore blanditiis veritatis earum dolorum nisi
              tempora tempore doloribus? Illo deleniti repellat ad ipsam est
              deserunt beatae minima? Architecto consequuntur vel iusto porro
              distinctio perspiciatis mollitia accusantium, dolore rerum
              dignissimos eveniet voluptates quidem rem in excepturi tenetur
              officiis? Magni consequatur sed, animi est odit et! Delectus
              aperiam eos, ipsum saepe porro nemo velit repellendus vero nisi
              modi ducimus expedita! Doloribus velit pariatur libero rem
              molestiae necessitatibus ut possimus accusamus expedita. Omnis
              quasi laudantium temporibus explicabo ipsa, autem ut consequuntur
              eveniet cupiditate fuga quisquam ullam ipsam odio molestias animi
              deleniti illum ea excepturi corporis maxime eligendi soluta
              repudiandae. Qui eos deserunt sit veritatis laboriosam fugiat
              optio dignissimos fugit! Voluptatum fugiat, architecto ipsum in,
              adipisci dignissimos corporis sunt libero doloribus ex, ea
              perferendis deserunt reiciendis accusamus nihil sapiente qui.
              Nobis impedit itaque esse suscipit blanditiis corporis eveniet cum
              adipisci?Nobis impedit itaque esse suscipit blanditiis corporis
              eveniet cum adipisci?Nobis impedit itaque esse suscipit blanditiis
              corporis eveniet cum adipisci?
            </p>
          </div>
          <div className="about-image">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
