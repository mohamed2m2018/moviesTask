import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import MovieCard from '../src/components/MovieCard';
import {fireEvent, render} from '@testing-library/react-native';
import {testIds} from '../src/constants';

let props = {
  title: 'No time to die',
  date: '29-10-2021',
  genres: ['Thriller', 'Action'],
  uri: '/iOPXG7q6ZqxSFp2iSY2CvgeRXyC.jpg',
  rating: '79',
  onPress: () => {},
};

describe('Movie card', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders correctly', () => {
    const screenToBeSnapped = renderer
      .create(<MovieCard {...props} />)
      .toJSON();
    expect(screenToBeSnapped).toMatchSnapshot();
  });

  it('renders correct title', () => {
    const {getByTestId} = render(<MovieCard {...props} />);
    const title = getByTestId(testIds.MOVIE_CARD_TITLE);
    expect(title.children[0]).toEqual(props.title);
  });
  it('renders correct rating', () => {
    const {getByTestId} = render(<MovieCard {...props} />);
    const rating = getByTestId(testIds.MOVIE_CARD_RATING);
    expect(rating.children[0]).toEqual(props.rating);
  });
  it('renders correct date', () => {
    const {getByTestId} = render(<MovieCard {...props} />);
    const date = getByTestId(testIds.MOVIE_CARD_DATE);
    expect(date.children[0]).toEqual(props.date);
  });
  it('fires onPress prop when clicked on', async () => {
    const MethodToBeSent = jest.fn(() => {});
    props.onPress = MethodToBeSent;
    const {getByTestId} = render(<MovieCard {...props} />);
    const touchable = getByTestId(testIds.MOVIE_CARD_TOUCHABLE);
    await act(async () => {
      fireEvent.press(touchable);
    });
    expect(MethodToBeSent).toHaveBeenCalled();
  });
});
