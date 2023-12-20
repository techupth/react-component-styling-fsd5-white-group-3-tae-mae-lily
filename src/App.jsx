import "./App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  return (
    <button
      css={css`
        width: 171.19px;
        height: 50px;
        top: 273px;
        left: 278.92px;
        padding: 0px, 16px, 0px, 16px;
        border-radius: 4px;
        gap: 8px;
        background-color: ${props.color === "primary" ? "#074EE8" : "#07A4E8"};
      `}
    >
      {props.color}
    </button>
  );
}

function Alert(props) {
  const getImageSource = (severity) => {
    if (severity === "error") {
      return "src/icon/frown.png";
    } else if (severity === "warning") {
      return "src/icon/alert-triangle.png";
    } else if (severity === "info") {
      return "src/icon/alert-circle.png";
    } else {
      return "src/icon/check-circle.png";
    }
  };

  const imageSource = getImageSource(props.severity);

  return (
    <>
      <div
        css={css`
          display: flex;
          align-items: center;
          width: 650px;
          height: 76px;
          top: 251px;
          left: 118px;
          border-radius: 10px;
          background-color: ${props.severity === "error"
            ? "#F9C8C8"
            : props.severity === "warning"
            ? "#F9D9C8"
            : props.severity === "info"
            ? "#F9EBC8"
            : "#CEF7CD"};
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            font-size: 20px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: 0px;
            text-align: left;
            color: #444444;
          `}
        >
          {" "}
          {imageSource && (
            <img
              src={imageSource}
              alt="Icon"
              css={css`
                margin: 20px;
                position: fixex;
              `}
            />
          )}
          {props.children}
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* ถ้าสร้าง Component ของ Button เสร็จแล้วให้ Uncomment โค้ดด้านล่าง เพื่อดูผลลัพธ์ */}
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* ถ้าสร้าง Component Alert เสร็จแล้วให้ Uncomment โค้ดด้านล่าง เพื่อดูผลลัพธ์ */}
        <Alert severity="error">This is error alert box</Alert>
        <Alert severity="warning">This is a warning alert box</Alert>
        <Alert severity="info">This is an info alert box</Alert>
        <Alert severity="success">This is a success alert box</Alert>
      </div>
    </div>
  );
}

export default App;
