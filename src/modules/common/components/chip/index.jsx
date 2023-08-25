import { StyledChip } from './chip.styles';

const SwxChip = ({ kind, label, color, size, background }) => {
    return <StyledChip kind={kind} label={label} swxcolor={color} size={size} background={background} />;
};

export default SwxChip;
