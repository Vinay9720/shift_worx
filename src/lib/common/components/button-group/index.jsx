'use client';

import { ButtonGroupContainer } from './button-group.styles';

export default function SwxButtonGroup({ children, height }) {
    return <ButtonGroupContainer height={height}>{children}</ButtonGroupContainer>;
}
