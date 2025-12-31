import { styled, rotate360 } from '@/theme';
import { Box } from './Box';

const LoaderWrapper = styled(Box, {
  height: '$dvh$100',
  width: '$vw$100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$background',
});

const Spinner = styled(Box, {
  width: '$px$40',
  height: '$px$40',
  borderRadius: '$percent$50',
  border: '$px$3 solid $border',
  borderTopColor: '$text',
  animation: `${rotate360} 0.8s linear infinite`,
});

export function Loader() {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
}
