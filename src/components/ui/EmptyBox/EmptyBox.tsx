import { Flex, Text, Box } from '@/components/elements';
import { EmptyBoxWrapper } from './style';
import { CircleClose } from '@/components/svgs';

interface NoResultsProps {
  message: string;
  subMessage?: string;
}

export const EmptyBox = ({ message, subMessage }: NoResultsProps) => {
  return (
    <EmptyBoxWrapper>
      <Box css={{ color: '$green', opacity: 0.6 }}>
        <CircleClose width={50} height={50} />
      </Box>
      <Flex direction="column" gap="4">
        <Text
          heading="h4"
          css={{ color: '$primaryHeading', fontWeight: '$fontWeight$semibold' }}
        >
          {message}
        </Text>
        {subMessage && (
          <Text css={{ color: '$secondryHeading', fontSize: '$px$14' }}>
            {subMessage}
          </Text>
        )}
      </Flex>
    </EmptyBoxWrapper>
  );
};
