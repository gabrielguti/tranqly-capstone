import { ComponentType } from "react";
import {Redirect, Route as ReactRout,RouteProps} from "react-router";
import { UseAuth } from "../providers/authProvider";

interface Props extends RouteProps{
  isPrivate?: boolean;
  component:ComponentType;
}

const Routes = ({isPrivate = false, component: Component, ...rest}: Props) => {

    const {accessToken, user}=UseAuth()
   
  return <>
  <ReactRout {...rest} render={()=> isPrivate === !!accessToken ? (<Component/>):(<Redirect to={isPrivate ? "/": `/dashboard${user.type}`}/>)}/>

  </>;
};

export default Routes;
