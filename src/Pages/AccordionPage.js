import Accordion from "../Components/Accordion";


function AccordionPage() {

  const items = [
    {
      id: 1,
      label: "Can I use your react project?",
      content: "You can use React Project. You can use React Project. You can use React Project. You can use React Project"
    },
    {
      id: 2,
      label: "Can I use your JavaScript project?",
      content: "You can use JavaScript Project. You can use JavaScript Project. You can use JavaScript Project. You can use JavaScript Project."
    },
    {
      id: 3,
      label: "Can I use your Css project?",
      content: "You can use Css Project. You can use Css Project. You can use Css Project. You can use Css Project."
    }
  ]

  return <Accordion items={items}/>;
}

export default AccordionPage;