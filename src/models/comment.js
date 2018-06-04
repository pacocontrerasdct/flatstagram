// create Comment class here
class Comment {

  constructor (image_id, user_text) {
    this.image_id = image_id
    this.user_text = user_text
    this.all = []
  }

  init() {
    this.image_id
    this.user_text
    this.findImage(image_id)
  }

  all() {
    console.log("Comment.all should return all of the comment objects in an array")
    return this.all
  }

  findImage() {
    let current_img_comments_tag = $( `#image-${this.image_id} > ul` )
    Image.all[this.image_id].comments.push(this.user_text)
    return current_img_comments_tag
  }

  commentEl() {

    return `<li class="comment-${this.image_id}" style="margin-bottom: 10px">${this.user_text}</li>`;
  }

}

