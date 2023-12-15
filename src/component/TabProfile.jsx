import { useEffect, useState } from "react";

function TabProfile(props) {
    const {content} = props;
    const [contentSelected, setContentSelected] = useState(0);

    async function handleSelect(num) {
        if(num === 0) { 
            setContentSelected(content)
        } else if(num === 1) { 
            setContentSelected('')
        } else if(num === 2) { 
            setContentSelected('')
        }
    }

    useEffect(() => {
        setContentSelected(content);
    }, [content])

    useEffect(() => {
        setContentSelected(content);
    }, []);

    return (
        <>
            <div className="flex mt-8 text-sm">
            <div className="w-1/3">
                <button onClick={() => handleSelect(0)}>ABOUT</button>
            </div>
            <div className="w-1/3">
                <button onClick={() => handleSelect(1)}>MY EVENT</button>
            </div>
            <div className="w-1/3">
                <button onClick={() => handleSelect(2)}>SAVED</button>
            </div>
            </div>

            <div className="text-sm mt-4 text-left text-slate-400 px-9">
                {contentSelected}
            </div>
        </>
    );
}

export default TabProfile;