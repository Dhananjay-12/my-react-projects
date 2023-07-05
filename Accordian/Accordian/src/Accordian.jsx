import AccordianItem from "./AccordianItem";

const faqs = [
  {
    title: "Where are these chairs assembled ?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem commodi pariatur, quasi, necessitatibus inventore neque accusantium, exercitationem similique hic consequatur sunt ex ab officia! Non illo nihil quam explicabo ipsum?",
  },
  {
    title: "How long do I have to return my chair ?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem commodi pariatur, quasi, necessitatibus inventore neque accusantium, exercitationem similique hic consequatur sunt ex ab officia! Non illo nihil quam explicabo ipsum?",
  },
  {
    title: "Do you ship to countries outside EU ?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem commodi pariatur, quasi, necessitatibus inventore neque accusantium, exercitationem similique hic consequatur sunt ex ab officia! Non illo nihil quam explicabo ipsum?",
  },
];

export default function Accordian() {
  return (
    <>
      {faqs.map((accordian, key) => (
        <AccordianItem
          num={key + 1}
          title={accordian.title}
          text={accordian.text}
          key={key}
        />
      ))}
    </>
  );
}
