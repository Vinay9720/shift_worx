import { StyledChip } from './chip.styles';

const SwxChip = ({ kind, label, color, size, background, icon, leftPadding }) => {
    return (
        <StyledChip
            kind={kind}
            label={label}
            swxcolor={color}
            size={size}
            background={background}
            icon={icon}
            leftPadding={leftPadding} // left padding is used for Icon padding-left.
        />
    );
};

export default SwxChip;
