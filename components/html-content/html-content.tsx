import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import parse from "html-react-parser";

interface HTMLContentProps {
  content?: string;
}

const HTMLContent: React.FC<HTMLContentProps> = ({ content }) => {
  if (content) {
    const window = new JSDOM("").window;
    const DOMPurify = createDOMPurify(window);

    const sanitizedContent = DOMPurify.sanitize(content);

    const parsedContent = parse(sanitizedContent);

    return <div className="text-base text-neutral-600">{parsedContent}</div>;
  }

  return <div>No content</div>;
};

export default HTMLContent;
