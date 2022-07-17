import { IPost } from '../shared/interfaces/interfaces';

export default class Post implements IPost {
  userId: string | null;
  id: string | null;
  title: string;
  body: string;

  constructor(title: string, body: string) {
    // eslint-disable-next-line no-restricted-globals
    this.id = self.crypto.randomUUID();
    this.userId = null;
    this.title = title;
    this.body = body;
  }
}
