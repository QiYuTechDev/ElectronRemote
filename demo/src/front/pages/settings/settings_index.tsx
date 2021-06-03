import React, {ReactNode} from "react";
import * as ReactDOM from "react-dom";
import {app} from "@electron/remote";

import {NavHeader} from "../../../nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";

import "./settings_index.css";

interface SettingsIndexProps {
}


type SettingMode = 'index'

interface SettingsIndexState {
    setting_mode: SettingMode
}

/// 设置首页
class SettingsIndexComponent extends React.Component<SettingsIndexProps, SettingsIndexState> {
    constructor(props: SettingsIndexProps) {
        super(props);
        this.state = {
            setting_mode: "index"
        }
    }

    renderIndex = (): ReactNode => {
        return <>
            <div className={"title has-text-centered"}>System</div>
            <main>
                <a className={"navbar-item"} onClick={() => {
                    app.showAboutPanel();
                }}>
                    <div><FontAwesomeIcon icon={faInfoCircle} size={"2x"}/></div>
                    <div>关于</div>
                </a>
            </main>
        </>
    }

    renderUI(): ReactNode {
        switch (this.state.setting_mode) {
            case "index":
                return this.renderIndex()
        }
    }

    render(): ReactNode {
        return <>
            <NavHeader/>

            {this.renderUI()}
        </>
    }
}


ReactDOM.render(<SettingsIndexComponent/>, document.querySelector("#root"));
