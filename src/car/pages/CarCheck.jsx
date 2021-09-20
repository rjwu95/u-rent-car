import { useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router";
import defaultImage from "../../assets/default.jpeg";

const x = "red",
  y = 2;

export const CarCheck = () => {
  const canvas = useRef();
  const w = useRef();
  const h = useRef();
  const flag = useRef(false);
  const prevX = useRef(0);
  const currX = useRef(0);
  const prevY = useRef(0);
  const currY = useRef(0);
  const dot_flag = useRef(false);
  const { id } = useParams();

  const findxy = useCallback((res, e) => {
    const ctx = canvas.current.getContext("2d");
    if (res === "down") {
      prevX.current = currX.current;
      prevY.current = currY.current;
      currX.current = e.clientX - canvas.current.offsetLeft;
      currY.current = e.clientY - canvas.current.offsetTop;

      flag.current = true;
      dot_flag.current = true;
      if (dot_flag.current) {
        ctx.beginPath();
        ctx.fillStyle = x;
        ctx.fillRect(currX.current, currY.current, 2, 2);
        ctx.closePath();
        dot_flag.current = false;
      }
    }
    if (res === "up" || res === "out") {
      flag.current = false;
    }
    if (res === "move") {
      if (flag.current) {
        prevX.current = currX.current;
        prevY.current = currY.current;
        currX.current = e.clientX - canvas.current.offsetLeft;
        currY.current = e.clientY - canvas.current.offsetTop;
        draw();
      }
    }
  }, []);

  const init = useCallback(() => {
    // ctx.current = canvas.current.getContext("2d");
    w.current = canvas.current.width;
    h.current = canvas.current.height;

    canvas.current.addEventListener(
      "mousemove",
      function (e) {
        findxy("move", e);
      },
      false
    );
    canvas.current.addEventListener(
      "mousedown",
      function (e) {
        findxy("down", e);
      },
      false
    );
    canvas.current.addEventListener(
      "mouseup",
      function (e) {
        findxy("up", e);
      },
      false
    );
    canvas.current.addEventListener(
      "mouseout",
      function (e) {
        findxy("out", e);
      },
      false
    );
  }, [findxy]);

  useEffect(() => {
    init();
  }, [init]);

  const draw = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(prevX.current, prevY.current);
    ctx.lineTo(currX.current, currY.current);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
  };

  function erase() {
    var m = window.confirm("Want to clear");
    const ctx = canvas.current.getContext("2d");
    if (m) {
      ctx.clearRect(0, 0, w.current, h.current);
      document.getElementById("canvasimg").style.display = "none";
    }
  }

  const save = () => {
    var dataURL = canvas.current.toDataURL();
    window.localStorage.setItem(`car-check/${id}`, encodeURIComponent(dataURL));
    window.close();
  };

  return (
    <>
      <canvas
        ref={canvas}
        id="can"
        width="350"
        height="476"
        style={{
          borderWidth: "2px",
          borderStyle: "solid",
          backgroundImage: `url(${defaultImage})`,
        }}
      ></canvas>
      <input type="button" value="save" id="btn" size="30" onClick={save} />
      <input
        type="button"
        value="clear"
        id="clear"
        size="23"
        onClick={erase}
      ></input>
    </>
  );
};
