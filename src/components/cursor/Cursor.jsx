import { useEffect, useRef } from "react";
//css
import "./cursor.css";

const Cursor = () => {
  const delay = 4;
  const _x = useRef(0);
  const _y = useRef(0);
  const dot = useRef(null);
  const dotOutline = useRef(null);
  const requestRef = useRef(null);
  const cursorVisible = useRef(true);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 0.7;
      dotOutline.current.style.opacity = 0.7;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.clientX;
    endY.current = e.clientY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;
    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  return (
    <>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>
    </>
  );
};

export default Cursor;
