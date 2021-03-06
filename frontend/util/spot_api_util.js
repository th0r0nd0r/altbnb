export const fetchSpots = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/spots',
    data,
    err: () => console.log('Error fetching spots')
  })
);

export const fetchSpot = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/spots/${id}`,
    err: () => console.log('Error fetching spot')
  })
);

export const createSpot = (spot) => (
  $.ajax({
    method: 'POST',
    url: 'api/spots',
    data: spot
  })
);

export const updateSpot = spot => (
  $.ajax({
    method: 'PATCH',
    url: `api/spots/${spot.spot.id}`,
    data: spot
  })
);

export const deleteSpot = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/spots/${id}`
  })
);

export const createReview = (review) => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: review
  })
);

export const updateReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.review.id}`,
    data: review
  })
);

export const deleteReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  })
);
