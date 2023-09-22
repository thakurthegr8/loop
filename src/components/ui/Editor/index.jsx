import { Editor as NovelEditor } from 'novel'
import { useEffect, useState } from 'react'

const Editor = (props) => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("novel__content")) {
            localStorage.removeItem("novel__content");
            setReady(true);
        } else {
            setReady(true);
        }
    }, [])
    return (
        <>
            {ready ? <NovelEditor {...props} /> : null}
        </>
    )
}

export default Editor