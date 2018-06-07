class CommentsController {

  constructor() {
    this.$comment_form = $( '.add-comment' );
  }

  init() {
    // kick off controller from here
    this.add_comment_form_listener();
  }

  add_comment_form_listener() {

    this.$comment_form.on( 'submit', function(e) {

      e.preventDefault();
      
      let imageId = $( this ).data('id');
      let userText = $( `ul[data-id=${imageId}] .user-text`).val();
      let newComment = new Comment(imageId, userText);

      // check for emptiness or duplication
      let controlChecks = newComment.isEmptyOrDuplicated();

      // if user-text value is not empty or duplicated
      if (controlChecks === 0) {
        
        console.log("text is ok");
        
        // add comment to imageId
        newComment.findImage();

        // build and append tag to DOM
        $( `#image-${imageId} > ul` ).append( newComment.commentEl() );

      }
      else {
        // alert with failure message
        alert(controlChecks);
      }

      // clean input clean
      $( `ul[data-id=${imageId}] .user-text`).val('');

      // console feedback
      console.log(Image.all);
      console.log(`Your left a comment on Image ${imageId} at position "${ Image.all[imageId].comments.findIndex( item => item === userText) }"`);
    })
  }
}
