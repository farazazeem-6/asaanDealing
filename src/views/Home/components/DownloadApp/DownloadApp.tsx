import { useScreenWidth } from '@/hooks';
import {
  ButtonImg,
  ComingSoonSection,
  ContentHeading,
  ContentSection,
  ContentSubHeading,
  DownloadButtons,
  IllustrationImg,
  TextContent,
} from './style';
import { Box, Flex } from '@/components/elements';
import { useTranslation } from 'react-i18next';
import { downloadAppEnum } from '@/utils/enums';

export const DownloadApp = () => {
  const { isMobile } = useScreenWidth();
  const { t } = useTranslation();
  return (
    <ComingSoonSection>
      <ContentSection>
        <TextContent>
          <ContentHeading>{t(downloadAppEnum.HEADING)}</ContentHeading>
          <ContentSubHeading>{t(downloadAppEnum.DISC1)}</ContentSubHeading>
          {!isMobile && (
            <ContentSubHeading>{t(downloadAppEnum.DISC2)} </ContentSubHeading>
          )}

          <DownloadButtons>
            <Flex>
              <ButtonImg
                src="/images/appstore_badge.svg"
                alt="Download on the App Store"
                
                
              />
            </Flex>

            <Flex>
              <ButtonImg
                src="/images/google_play_badge.svg"
                alt="Get it on Google Play"
                
                
              />
            </Flex>
          </DownloadButtons>
        </TextContent>

        <Box>
          <IllustrationImg src="/images/AppDevelopment.svg" alt="App Preview" />
        </Box>
      </ContentSection>
    </ComingSoonSection>
  );
};
