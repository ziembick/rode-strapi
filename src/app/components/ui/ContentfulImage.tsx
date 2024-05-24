import Image from 'next/image';

const ContentfulImage = ({ src, width, quality, ...props }: any) => {
  const params = `?w=${width}&q=${quality || 75}`;
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image src={`${src}${params}`} {...props} />;
};

export default ContentfulImage;