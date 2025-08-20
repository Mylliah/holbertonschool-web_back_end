import ClassRoom from './0-classroom.js';

describe('ClassRoom', () => {
  it('should create a ClassRoom instance with the correct maxStudentsSize', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });

  it('should allow different maxStudentsSize values', () => {
    const room19 = new ClassRoom(19);
    const room34 = new ClassRoom(34);
    expect(room19._maxStudentsSize).toBe(19);
    expect(room34._maxStudentsSize).toBe(34);
  });
});
