import Sider from "antd/es/layout/Sider";
import SidebarContent from "./sidebarContent";
import { useMicrogrid } from "../../context/useMicrogridContext";

const SidebarComponent = () => {
  const { collapsed, toggleCollapsed } = useMicrogrid();
  return (
    <Sider
      className="!fixed z-50 h-full"
      collapsible
      collapsed={collapsed}
      onCollapse={() => toggleCollapsed()}
    >
      <SidebarContent />
    </Sider>
  );
};

export default SidebarComponent;
