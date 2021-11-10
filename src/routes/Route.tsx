import { ComponentType } from "react";
import {Redirect, Route as ReactRout,RouteProps} from "react-router";
import { UseAuth } from "../providers/AuthProvider";

interface Props extends RouteProps{
  isPrivate?: boolean;
  component:ComponentType;
}

const Routes = ({isPrivate = false, component: Component, ...rest}: Props) => {

    const {accessToken}=UseAuth()

  return <>
  <ReactRout {...rest} render={()=> isPrivate === !!accessToken ? (<Component/>):(<Redirect to={isPrivate ? "/": "/dashboard"}/>)}/>

  </>;
};

export default Routes;
