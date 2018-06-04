class CommentsController {

  constructor() {
    this.$comment_form = $( '.add-comment' )
  }

  init() {
    // kick off controller from here
    this.add_comment_form_listener()
  }

  add_comment_form_listener() {

    this.$comment_form.on( 'submit', function(e) {

      e.preventDefault()
      
      let image_id = $( this ).data('id')
      let image_object = $( `ul[data-id=${image_id}]` )
      let user_text = $( `ul[data-id=${image_id}] .user-text`).val()
  
      // if user-text value is not empty
      if (user_text != '') {

        let a_new_comment = new Comment(image_id, user_text)

        // add comment to image_id
        a_new_comment.findImage()

        // build new comment tag
        let element = a_new_comment.commentEl()

        // append tag
        $( `#image-${image_id} > ul` ).append( element )

        // clean input clean
        $( `ul[data-id=${image_id}] .user-text`).val('')
      }
    })
  }
}
