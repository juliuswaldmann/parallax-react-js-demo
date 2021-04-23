import Space from './Space';
import {ParallaxContainer} from 'parallax-react-js';

function View () {
    return (
        <div className="View">
            <ParallaxContainer>
                <Space></Space>
            </ParallaxContainer>
        </div>
    );
}

export default View;