import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContet(props) {
    const { theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            padding: "1.5rem",
            backgroundColor: theme =="Light" ? "white" : "black",
            color: theme == "Light" ? "black" : "white",
        }}
        >
            <p> 안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme} 테마 변경></button>
            </div>
    );
}

export default MainContent;