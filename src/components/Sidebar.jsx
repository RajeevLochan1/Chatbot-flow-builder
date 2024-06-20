import { useEffect, useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
const Sidebar = () => {
  const [showUsage, setShowUsage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowUsage(false);
    }, 5000);
  }, [showUsage]);

  const displayUsage = showUsage ? "" : "none";

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <>
      <div className="description" style={{ display: displayUsage, color:"black" }}>
        Drag below message box to the left side pane to add new nodes.
      </div>
      <aside>
        <div
          className="appnode"
          onDragStart={(event) => onDragStart(event, "default")}
          draggable
        >
          <span
            className="material-symbols-outlined"
            style={{ paddingBottom: 5 }}
          >
            <BiMessageRoundedDetail />
          </span>
          Message
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
