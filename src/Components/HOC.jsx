import { useLocation } from "react-router-dom";

function HOC({ child }) {
    const { pathname } = useLocation();
    const Child = child;
    
    return (
        <main id={pathname === "/" ? "home" : pathname.slice(1)}>
            <Child />
        </main>
    );
}

export default HOC;