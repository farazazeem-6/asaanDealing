import {
  ComingSoonSection,
  ContentHeading,
  ContentSection,
  ContentSubHeading,
  IllustrationImg,
  IllustrationSection,
} from './style';

export const DownloadApp = () => {
  return (
    <ComingSoonSection>
      <ContentSection>
        <ContentHeading>We Are Coding</ContentHeading>
        <ContentSubHeading>
          Get ready for an exciting new app experience!
        </ContentSubHeading>
        <ContentSubHeading>
          We are working hard to bring you an amazing mobile experience.
        </ContentSubHeading>
      </ContentSection>
      <IllustrationSection>
        <IllustrationImg
          height={500}
          src="/images/AppDevelopment.svg"
          alt="App Preview"
        />
      </IllustrationSection>
    </ComingSoonSection>
  );
};
