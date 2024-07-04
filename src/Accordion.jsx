import AccordianItem from "./AccordianItem.jsx";
import {useState} from "react";

function Accordion({data}) {
    const [curOpen, setCurOpen]=useState();
    return (
        <>
            <div className='accordion'>
                {data.map((el , i) => <AccordianItem text={el.text} curOpen={curOpen} onOpen={setCurOpen} title={el.title} num={i} key={el.title}> {el.text}</AccordianItem>  )}

            <AccordianItem curOpen={curOpen} onOpen={setCurOpen} title='تماس با ما' text='one' key='test-one1' num={3}  >

                <p>راه های ارتباطی:</p>
                    <ul>
                        <li>شماره تماس:*******</li>
                        <li>واتساپ:******</li>
                        <li>وب سایت: www.eeee.com</li>
                    </ul>



            </AccordianItem>
            </div>

        </>
    )



}

export default Accordion;