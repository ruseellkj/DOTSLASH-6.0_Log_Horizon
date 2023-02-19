import "./stats.css";
import { useEffect } from "react";
const Stats = () => {
  useEffect(() => {
    var dark1 = document.getElementById("dark1"),
      t = 5,
      percentage1 = parseInt(
        document.getElementById("perc1").innerHTML.slice(0, -1),
        10
      ),
      theta = 0,
      maxTheta = (180 * percentage1) / 50,
      radius1 = document.getElementById("svg1").getBBox().width / 2;
    dark1.setAttribute(
      "transform",
      "translate(" + radius1 + "," + radius1 + ")"
    );

    var animate = setInterval(function () {
      theta += 0.5;
      var d =
        "M0,0 v" +
        -radius1 +
        "A" +
        radius1 +
        "," +
        radius1 +
        " 1 " +
        (theta > 180 ? 1 : 0) +
        ",1 " +
        Math.sin((theta * Math.PI) / 180) * radius1 +
        "," +
        Math.cos((theta * Math.PI) / 180) * -radius1 +
        "z";
      dark1.setAttribute("d", d);
      if (theta > maxTheta) {
        clearInterval(animate);
      }
    }, t);

    //For seond one
    var dark2 = document.getElementById("dark2"),
      t = 5,
      percentage2 = parseInt(
        document.getElementById("perc2").innerHTML.slice(0, -1),
        10
      ),
      theta2 = 0,
      maxTheta2 = (180 * percentage2) / 50,
      radius2 = document.getElementById("svg2").getBBox().width / 2;
    dark2.setAttribute(
      "transform",
      "translate(" + radius2 + "," + radius2 + ")"
    );

    var animate2 = setInterval(function () {
      theta2 += 0.5;
      var d =
        "M0,0 v" +
        -radius2 +
        "A" +
        radius2 +
        "," +
        radius2 +
        " 1 " +
        (theta2 > 180 ? 1 : 0) +
        ",1 " +
        Math.sin((theta2 * Math.PI) / 180) * radius2 +
        "," +
        Math.cos((theta2 * Math.PI) / 180) * -radius2 +
        "z";
      dark2.setAttribute("d", d);
      if (theta2 > maxTheta2) {
        clearInterval(animate2);
      }
    }, t);

    //For third one
    var dark3 = document.getElementById("dark3"),
      t = 5,
      percentage3 = parseInt(
        document.getElementById("perc3").innerHTML.slice(0, -1),
        10
      ),
      theta3 = 0,
      maxTheta3 = (180 * percentage3) / 50,
      radius3 = document.getElementById("svg3").getBBox().width / 2;
    dark3.setAttribute(
      "transform",
      "translate(" + radius3 + "," + radius3 + ")"
    );

    var animate3 = setInterval(function () {
      theta3 += 0.5;
      var d =
        "M0,0 v" +
        -radius3 +
        "A" +
        radius3 +
        "," +
        radius3 +
        " 1 " +
        (theta3 > 180 ? 1 : 0) +
        ",1 " +
        Math.sin((theta3 * Math.PI) / 180) * radius3 +
        "," +
        Math.cos((theta3 * Math.PI) / 180) * -radius3 +
        "z";
      dark3.setAttribute("d", d);
      if (theta3 > maxTheta3) {
        clearInterval(animate3);
      }
    }, t);

    //For the Fourth One
    var dark4 = document.getElementById("dark4"),
      t = 5,
      percentage4 = parseInt(
        document.getElementById("perc4").innerHTML.slice(0, -1),
        10
      ),
      theta4 = 0,
      maxTheta4 = (180 * percentage4) / 50,
      radius4 = document.getElementById("svg4").getBBox().width / 2;
    dark4.setAttribute(
      "transform",
      "translate(" + radius4 + "," + radius4 + ")"
    );

    var animate4 = setInterval(function () {
      theta4 += 0.5;
      var d =
        "M0,0 v" +
        -radius4 +
        "A" +
        radius4 +
        "," +
        radius4 +
        " 1 " +
        (theta4 > 180 ? 1 : 0) +
        ",1 " +
        Math.sin((theta4 * Math.PI) / 180) * radius4 +
        "," +
        Math.cos((theta4 * Math.PI) / 180) * -radius4 +
        "z";
      dark4.setAttribute("d", d);
      if (theta4 > maxTheta4) {
        clearInterval(animate4);
      }
    }, t);
  }, []);

  return (
    <div className="big-container">
      <h1 className="do-you-know">Do You Know ?</h1>
      <br />
      <div className="stat-image-list">
        <div className="stat-image">
          <svg id="svg1" width="140" height="140" viewBox="0 0 141 141">
            <path
              id="light"
              d="M70,70 v-70 a70,70 0 0,1 0,140 a70,70 0 1,1 0,-140"
              fill="#e2e1e4"
            />
            <path id="dark1" d="M70,70 v-70 a70,70 0 0,1 0,0" fill="#cf711f" />
            <path
              d="M20,70 a50,50 0 0,1 100,0 a50,50 0 0,1 -100,0"
              fill="white"
            />
            <text
              id="perc1"
              x="70"
              y="79"
              font-size="30px"
              text-anchor="middle"
            >
              85%
            </text>
          </svg>
          <div className="stat-text">
            People think stray dogs should be removed{" "}
          </div>
        </div>
        <div className="stat-image">
          <svg id="svg2" width="140" height="140" viewBox="0 0 141 141">
            <path
              id="light"
              d="M70,70 v-70 a70,70 0 0,1 0,140 a70,70 0 1,1 0,-140"
              fill="#e2e1e4"
            />
            <path id="dark2" d="M70,70 v-70 a70,70 0 0,1 0,0" fill="#cf711f" />
            <path
              d="M20,70 a50,50 0 0,1 100,0 a50,50 0 0,1 -100,0"
              fill="white"
            />
            <text
              id="perc2"
              x="70"
              y="79"
              font-size="30px"
              text-anchor="middle"
            >
              35%
            </text>
          </svg>
          <div className="stat-text">People killed stray animals </div>
        </div>
        <div className="stat-image">
          <svg id="svg3" width="140" height="140" viewBox="0 0 141 141">
            <path
              id="light"
              d="M70,70 v-70 a70,70 0 0,1 0,140 a70,70 0 1,1 0,-140"
              fill="#e2e1e4"
            />
            <path id="dark3" d="M70,70 v-70 a70,70 0 0,1 0,0" fill="#cf711f" />
            <path
              d="M20,70 a50,50 0 0,1 100,0 a50,50 0 0,1 -100,0"
              fill="white"
            />
            <text
              id="perc3"
              x="70"
              y="79"
              font-size="30px"
              text-anchor="middle"
            >
              77%
            </text>
          </svg>
          <div className="stat-text">Number of stray animals in India </div>
        </div>
        <div className="stat-image">
          <svg id="svg4" width="140" height="140" viewBox="0 0 141 141">
            <path
              id="light"
              d="M70,70 v-70 a70,70 0 0,1 0,140 a70,70 0 1,1 0,-140"
              fill="#e2e1e4"
            />
            <path id="dark4" d="M70,70 v-70 a70,70 0 0,1 0,0" fill="#cf711f" />
            <path
              d="M20,70 a50,50 0 0,1 100,0 a50,50 0 0,1 -100,0"
              fill="white"
            />
            <text
              id="perc4"
              x="70"
              y="79"
              font-size="30px"
              text-anchor="middle"
            >
              62%
            </text>
          </svg>
          <div className="stat-text">Total homeless companion animals</div>{" "}
        </div>
      </div>
      <div className="big-picture">
        <div className="big-picture-text">
          Care They Need, <br />
          Love They Deserve
        </div>
      </div>
    </div>
  );
};

export default Stats;
