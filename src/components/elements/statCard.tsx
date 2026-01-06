import { useCountUp } from '@/hooks';
import { Flex } from './Flex';
import { styled } from '@/theme';
import { TStatItemProps } from './types/statCard';

const CardContainer = styled(Flex, {
  padding: '$rem$0_62',
});

const IconBox = styled(Flex, {
  background: '$gradients$greenGradient1',
  borderRadius: '$percent$50',
  width: '$px$40',
  height: '$px$40',
  color: 'white',
  marginRight: '$px$16',
  flexShrink: 0,
});

const TextBox = styled(Flex, {
  flexDirection: 'column !important',
});

const CountText = styled('span', {
  fontSize: '$px$14',
  fontWeight: '$fontWeight$semibold',
  color: '$primaryHeading',
});

const LabelText = styled('span', {
  fontSize: '$px$10',
  color: '$secondryHeading',
  textTransform: 'uppercase',
  marginTop: '$px$4',
});

export const StatCard = ({ icon: Icon, number, label }: TStatItemProps) => {
  const numStr = String(number);
  const numericPart = numStr.replace(/\D/g, '');
  const suffix = numStr.replace(/[0-9]/g, '');

  const animatedValue = useCountUp(numericPart);

  return (
    <CardContainer align={'center'}>
      <IconBox justify={'center'} align={'center'}>
        <Icon
          css={{ color: '$white' }}
          width={20}
          height={20}
          strokeWidth={3}
        />
      </IconBox>
      <TextBox>
        <CountText>
          {animatedValue}
          {suffix}
        </CountText>
        <LabelText>{label}</LabelText>
      </TextBox>
    </CardContainer>
  );
};
