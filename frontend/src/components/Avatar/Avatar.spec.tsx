import { render, screen } from '@testing-library/react';
import { Avatar } from '.';

describe('Avatar component', () => {
  it('should render the avatar with the correct url and alt text', () => {
    render(<Avatar imgUrl='/fake-image.png' altText='fake-image-alt' />)

    const avatar = screen.getByAltText('fake-image-alt');

    expect(avatar).toBeInTheDocument();
  });
})
