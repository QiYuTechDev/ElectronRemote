import * as React from 'react';
import {ReactNode} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faCogs} from "@fortawesome/free-solid-svg-icons/faCogs";

// 每个页面都会使用页面导航
// 无需在别的文件中引用此文件
import "bulma/css/bulma.css";


/// 页面导航
export class NavHeader extends React.Component<unknown, unknown> {

    render(): ReactNode {
        return (
            <div className={"navbar"}>
                <div className={"navbar-brand"}>
                    <a className={"navbar-item"} href={MAIN_WINDOW_WEBPACK_ENTRY}>
                        <FontAwesomeIcon icon={faHome}/>&nbsp; Home
                    </a>
                    <a className={"navbar-item"} href={SETTINGS_INDEX_WEBPACK_ENTRY}>
                        <FontAwesomeIcon icon={faCogs}/>&nbsp; System
                    </a>
                </div>
            </div>
        )
    }
}
