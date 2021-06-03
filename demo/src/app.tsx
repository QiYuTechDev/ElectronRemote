import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {NavHeader} from "./nav";
import {ReactNode} from "react";

import "./index.css";
import {SpacerBlock} from "./front/ui/Spacer";


interface AppIndexProps {
}

interface AppIndexState {
}

class AppIndexComponent extends React.Component<AppIndexProps, AppIndexState> {
    static defaultProps = {}


    render(): ReactNode {
        return <div>
            <NavHeader/>
            <SpacerBlock height="2em"/>
            <div className="app-title">
                <h1 className="title has-text-centered">Electron Remote Bug Demo</h1>
            </div>
            <SpacerBlock height="2em"/>
        </div>
    }
}

const root = document.querySelector("#root");
ReactDOM.render(<AppIndexComponent/>, root);
