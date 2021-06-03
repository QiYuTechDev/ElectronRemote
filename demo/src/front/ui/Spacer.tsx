import React, {ReactNode} from "react";


interface SpacerProps {
    width: string
    height: string
}

/// 空白的大小
export class SpacerBlock extends React.Component<SpacerProps, never> {
    static defaultProps = {
        width: 'initial',
        height: 'initial',
    }

    constructor(props: SpacerProps) {
        super(props);
    }

    render(): ReactNode {
        return <div style={this.props}/>
    }
}

