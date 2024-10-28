import React from "react";


function Page() {

    const [show, setShow] = React.useState(false)



    return(
        <div className={`h-[100vh] w-[100vw] bg-red-300`}>
            <button id={'button'} className={`place-self-center h-[]`} onClick={()=>{setShow(!show)}}>
                click
            </button>
            {show &&
                <div id={'show'}>
                    i am clicked ......
                </div>

            }

        </div>

    )
}

export default Page;