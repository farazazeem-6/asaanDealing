import { Flex, Text, Box } from '@/components/elements';
import { EmptyBoxWrapper } from './style';
import { SearchNotFound } from '@/components/svgs';

interface NoResultsProps {
  message: string;
  subMessage?: string;
}

export const EmptyBox = ({ message, subMessage }: NoResultsProps) => {
  return (
    <EmptyBoxWrapper>
      <Box css={{ opacity: 0.6 }}>
        <SearchNotFound width={100} height={100}/>
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
