import { useState } from "react";
import "./style.css";

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
        title: "How long do I have to return my chair?",
        text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
        title: "Do you ship to countries outside the EU?",
        text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
];

export default function Accordion() {
    const [curOpen, setCurOpen] = useState(null);

    return (
        <div className="accordion">
            {/*el => current element & i => current index */}
            {/* it's better not rely on the index but thing is truly unique */}
            {faqs.map((el, i) => (
                <AccordionItem
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                    title={el.title}
                    num={i}
                    key={el.title}
                >{el.text} </AccordionItem>
            ))}
            <AccordionItem
                curOpen={curOpen}
                onOpen={setCurOpen}
                title="Test 1"
                num={22}
                key="test 1">
                <p>Allows React developers to:</p>
                <ul>
                    <li>Break up UI into components</li>
                    <li>Make components reusuable</li>
                    <li>Place state efficiently</li>
                </ul>
            </AccordionItem>
        </div>
    );
}

function AccordionItem({ num, title, onOpen, curOpen, children }) {
    // const [isOpen, setIsOpen] = useState(false);
    const isOpen = num === curOpen;
    function handleToggle() {
        // setIsOpen(() => !isOpen)
        onOpen(num);
    }
    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : `${num}`}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen === true ? "_" : "+"}</p>
            {isOpen === true ? <div className="content-box ">{children}</div> : null}
        </div>
    );
}
