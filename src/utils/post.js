export default class Post {
    constructor(title, body) {
        this.id = self.crypto.randomUUID();
        this.userId = null;
        this.title = title;
        this.body = body
    }
}