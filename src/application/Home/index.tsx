import React from 'react';
import { renderRoutes } from "react-router-config";
import { Top, Tab, TabItem } from './style';
import { NavLink} from 'react-router-dom';

function Home (props: any) {
  const { route } = props;

  console.log('route 1-->', JSON.stringify(route));
  console.log('route 2-->', JSON.stringify(route.routes));

  return (
    <div>

      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>

      <Tab>
        {/* activeClassName : 选择样式 */}
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem>
            <span> 推荐 </span>
          </TabItem>
        </NavLink>

        <NavLink to="/singers" activeClassName="selected">
          <TabItem>
            <span> 歌手 </span>
          </TabItem>
        </NavLink>

        <NavLink to="/rank" activeClassName="selected">
          <TabItem>
            <span> 排行榜 </span>
          </TabItem>
        </NavLink>

      </Tab>
      { renderRoutes (route.routes) }
    </div>
  )
}

export default React.memo (Home);