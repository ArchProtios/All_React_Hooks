import { useEffect } from "react";

function Coustom_Hooks(count) {
    useEffect(() => {
        document.title = `Clicked ${count} times`;
    },[count]);
}

export default Coustom_Hooks;