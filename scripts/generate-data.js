import { faker } from '@faker-js/faker';

const generateMovies = () => {
  return Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    poster: faker.image.urlLoremFlickr({ width: 400, height: 600, category: 'movie' }),
    duration: faker.number.int({ min: 80, max: 180 })
  }));
};

const generateSessions = (movies) => {
  return movies.flatMap(movie => 
    Array.from({ length: 3 }, (_, i) => ({
      id: movie.id * 10 + i,
      movieId: movie.id,
      time: faker.date.soon({ days: 7 }),
      seats: Array.from({ length: 20 }, (_, j) => ({
        id: j + 1,
        row: Math.floor(j / 5) + 1,
        number: (j % 5) + 1,
        booked: faker.datatype.boolean()
      }))
    }))
  );
};

const data = {
  movies: generateMovies(),
  sessions: generateSessions(generateMovies())
};

console.log(JSON.stringify(data, null, 2));