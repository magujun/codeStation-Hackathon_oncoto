import { render, screen } from '@testing-library/react';
import { Avatar } from '.';

describe('Avatar component', () => {
  it('should render the avatar with the correct url and alt text', () => {
    render(<Avatar imgUrl='/fake-image.png' altText='fake-image-alt' firstNameInitialLetter="O" />)

    const avatar = screen.getByAltText('fake-image-alt');

    expect(avatar).toBeInTheDocument();
  });

  it('should render the first name initial letter when the image url is undefined', () => {
    let undefinedImgUrl: undefined;

    render(<Avatar imgUrl={undefinedImgUrl} altText='fake-image-alt' firstNameInitialLetter="O" />)

    const avatar = screen.getByText('O');

    expect(avatar).toBeInTheDocument();
  });
});
