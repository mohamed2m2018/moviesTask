import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import MoviesList from '../src/components/MoviesList';
import {testIds} from '../src/constants';

let props = {
  movies: [
    {
      adult: false,
      backdrop_path: '/kcvKEvTWqIGMjpVJdbDVRHdIt4C.jpg',
      genre_ids: [12, 28, 53],
      id: 370172,
      original_language: 'en',
      original_title: 'No Time to Die',
      overview:
        'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
      popularity: 791.973,
      poster_path: '/iOPXG7q6ZqxSFp2iSY2CvgeRXyC.jpg',
      release_date: '2021-09-29',
      title: 'No Time to Die',
      video: false,
      vote_average: 7.3,
      vote_count: 225,
    },
    {
      adult: false,
      backdrop_path: '/5WPKkfVcMtQ0YOvSovbmxvNq3i1.jpg',
      genre_ids: [27, 53],
      id: 565028,
      original_language: 'en',
      original_title: 'Candyman',
      overview:
        'Anthony and his partner move into a loft in the now gentrified Cabrini-Green, and after a chance encounter with an old-timer exposes Anthony to the true story behind Candyman, he unknowingly opens a door to a complex past that unravels his own sanity and unleashes a terrifying wave of violence.',
      popularity: 581.797,
      poster_path: '/dqoshZPLNsXlC1qtz5n34raUyrE.jpg',
      release_date: '2021-08-25',
      title: 'Candyman',
      video: false,
      vote_average: 6.5,
      vote_count: 408,
    },
  ],
  hasMore: false,
  fetching: false,
  action: () => {},
  page: 1,
};

describe('Movie List', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders correctly', () => {
    const screenToBeSnapped = renderer
      .create(<MoviesList {...props} />)
      .toJSON();
    expect(screenToBeSnapped).toMatchSnapshot();
  });

  it('data rendered in flatlist are correct data from movies prop', async () => {
    const {getByTestId} = render(<MoviesList {...props} />);
    const list = getByTestId(testIds.MOVIES_FLATLIST);
    expect(list.props.data).toStrictEqual(props?.movies);
  });
});
