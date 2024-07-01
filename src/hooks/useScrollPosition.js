import { useEffect, useState } from "react";
import { throttle } from "underscore";

export default function useScrollPosition() { // -- 监听滚动条 hook
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const scrollEventHandle = throttle(() => {
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        }, 100)

        window.addEventListener("scroll", scrollEventHandle)

        return () => {
            window.removeEventListener("scroll", scrollEventHandle)
        }
    }, [])

    return { scrollX, scrollY }
}
