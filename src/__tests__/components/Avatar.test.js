import { render, screen } from '@testing-library/react';
import { Avatar } from '../../components/Avatar/Avatar';

describe('Test Avatar component', () => {
  const imgData = {
    src: 'example_image.jpg',
    alt: 'Interesting image',
  };

  test('Avatar has passed properties', () => {
    render(<Avatar img={imgData.src} alt={imgData.alt} />);

    const avatarElement = screen.getByAltText(imgData.alt);

    expect(avatarElement).toHaveAttribute('src', imgData.src);
  });
});
