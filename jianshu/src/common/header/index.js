import React, { Component } from 'react';


/** 导入局部样式 */
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

class Header extends Component {
  render (){
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className ='left active'>首页</NavItem>
          <NavItem className ='left'>下载App</NavItem>
          <NavItem className ='right'>
            <i className ='iconfont'>&#xe636;</i>
          </NavItem>
          <NavItem className ='right'>登录</NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <i className ='iconfont'>&#xe60c;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className ='writing'> <i className ='iconfont'>&#xe6a4;</i> 写文章</Button>
          <Button className ='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

export default Header;