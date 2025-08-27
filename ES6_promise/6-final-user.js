import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName),
    uploadPhoto(lastName, fileName),
  ])
    .then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return {
          status: result.status,
          value: result.reason,
        };
      }

      return {
        status: result.status,
        value: result.reason,
      };
    }));
}
