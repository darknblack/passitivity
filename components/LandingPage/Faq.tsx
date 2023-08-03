interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem(props: FAQItemProps) {
  return (
    <div>
      <h4 className="text-2xl font-[600] text-gray-800 mb-1">{props.question}</h4>
      <p className="text-base text-gray-500 font-[400]">{props.answer}</p>
    </div>
  );
}

export default FAQItem;
