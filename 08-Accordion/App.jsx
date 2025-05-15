import Accordion from "./Accordion";
import { accordionData } from "./utils/contant";

const App = () => {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }) => {
        return <Accordion title={title} content={content} />;
      })}
    </div>
  );
};

export default App;
