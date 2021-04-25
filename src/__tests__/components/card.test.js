import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card, Player } from '../../components';

const category = 'series';
const slideRows = [
  {
    title: 'Documentaries',
    data: [
      {
        maturity: '18',
        description: 'Tiger King Description',
        id: '0a91bf30-f882-4eb8-9e2b-2936633ae258',
        slug: 'tiger-king',
        genre: 'documentaries',
        title: 'Tiger King',
        docId: '1',
      },
    ],
  },
  {
    title: 'Feel Good',
    data: [
      {
        description: 'Juno description',
        title: 'Juno',
        id: 'fa62558e-0508-4710-bfaf-ba9854841329',
        slug: 'juno',
        maturity: '12',
        genre: 'feel-good',
        docId: '2',
      },
    ],
  },
  {
    title: 'Children',
    data: [
      {
        description: 'Peppa Pig description',
        title: 'Peppa Pig',
        id: 'ra62558e-0508-4710-bfaf-ba9854841330',
        slug: 'peppa-pig',
        maturity: '0',
        genre: 'children',
        docId: '3',
      },
    ],
  },
];

describe('<Card />', () => {
  it('renders the <Card /> with populated data', () => {
    const { container, getByText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(getByText('Documentaries')).toBeTruthy();
    expect(getByText('Tiger King')).toBeTruthy();
    expect(getByText('Tiger King Description')).toBeTruthy();

    expect(getByText('Feel Good')).toBeTruthy();
    expect(getByText('Juno')).toBeTruthy();
    expect(getByText('Juno description')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Card /> and toggles the card', () => {
    const { container, queryByText, getByTestId, getByAltText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item
                  key={item.docId}
                  item={item}
                  data-testid={`${item.slug}-item-feature`}
                >
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(queryByText('18')).toBeFalsy();
    fireEvent.click(getByTestId('tiger-king-item-feature'));
    expect(queryByText('18')).toBeTruthy();
    fireEvent.click(getByAltText('close'));
    expect(queryByText('18')).toBeFalsy();

    expect(queryByText('PG')).toBeFalsy();
    fireEvent.click(getByTestId('peppa-pig-item-feature'));
    expect(queryByText('PG')).toBeTruthy();
    fireEvent.click(getByAltText('close'));
    expect(queryByText('PG')).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
