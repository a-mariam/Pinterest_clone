import React from "react";
import styles from "../../css-modules/page.module.css"
import Card from "../../reuseables/Card";
import {data} from "../../utils/data";

function Page() {

    const [show, setShow] = React.useState(false)



    return(
        <div className={` ${styles.mainPage} h-[100vh] w-[100vw] flex md:grid gap-4 md:px-3 md:py-3 px-3 py-3 bg-[rgba(255, 255, 255, 0.2)]  `}>
            {data.map((src, index) => (

                // <Card key={'card'+ index} src={'https://i.pinimg.com/236x/b9/36/1b/b9361b8bfdc46704fad23b57d1bbcfff.jpg'} id={'card'+  index}/>
                // <div>{console.log("idi", src.src)}</div>
                //     <Card key={'card'} src={'https://i.pinimg.com/236x/b9/36/1b/b9361b8bfdc46704fad23b57d1bbcfff.jpg'} id={'card'}/>

                <div
                    className={`w-[10rem] h-[10rem] bg-purple-700 rounded-md`}
                >
                    jfuyrhf
                </div>
            ))}
            {/*    <Card key={'card'} src={'https://i.pinimg.com/236x/b9/36/1b/b9361b8bfdc46704fad23b57d1bbcfff.jpg'} id={'card'}/>*/}

        </div>

    )
}

export default Page;