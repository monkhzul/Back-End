import * as React from 'react';
import { NavLink, Route, Redirect, Router } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Juice from '../component/SubMenu/Juice';
import '../css/style.css';

const MenuComponent = ({match}) => {
      return (
        <div>
        <Nav className="me-auto my-4"
                id='menu-tab'
                defaultActiveKey='/salad'>
            <div className="tses d-flex">
              <NavLink className="nav-link" exact to={`${match.url}/juice`}>
              {" "}
                НҮҮР{" "}
              </NavLink>
              <NavLink className="nav-link" to={`${match.url}/juice`}>
                ХООЛНЫ ЦЭС
              </NavLink>
              <NavLink className="nav-link" to={`${match.url}/meu`}>
                ХҮРГЭЛТИЙН БҮС
              </NavLink>
              <NavLink className="nav-link" to={`${match.url}/mnu`}>
                dfghyjnhg
              </NavLink>
              <NavLink className="nav-link" to={`${match.url}/enu`}>
                defrgt БҮС
              </NavLink>
            </div>
          </Nav>
          
          <Router>
          <Route
          exact
          path={match.path}
          render={() => <Redirect to={`${match.path}/menu`} />}
        />
          <Route path={`${match.path}/juice`} component={Juice} />
          </Router>
        </div>
      );
}

export default MenuComponent;
