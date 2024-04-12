import { useEffect } from "react";

export const UseTitle = (title) => {

    useEffect(() => {
        document.title = `${title} | Shopping Cart`;
    }, [title]);

    return null;
}
