// create Comment class here
class Comment {

  constructor (imageId, userText) {
    this._imageId = imageId;
    this._userText = userText;
  }

  // control checks
  isEmptyOrDuplicated() {
    let empty =  (this._userText === "" ) ? "A comment can't be empty" : this.isRepeated();
    return empty;
  }

  isRepeated() {
    let isDuplicatedComment = Image.all[this._imageId].comments.findIndex( item => item == this._userText)
    return isDuplicatedComment !== -1 ? "A comment can't be repeated" : 0;
  }

  // find image and add comment to 'comments' attr
  findImage() {
    Image.all[this._imageId].comments.push(this._userText);
  }

  // build new comment tag
  commentEl() {
    return `<li class="comment-${this._imageId}" style="margin-bottom: 10px">${this._userText}</li>`;
  }
}

