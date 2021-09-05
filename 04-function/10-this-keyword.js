//TODO method -> obj
//TODO function -> global (window, global)

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag)
    }, this)
  },
  play() {
    console.log('play', this)
  }
}
video.stop = function stop() {
  console.log(this)
}
// video.play()
// video.stop()

function playVideo() {
  console.log(this)
}
// playVideo()

function Video(title) {
  this.title = title
  // console.log(this)
}

//? process create empty object {}
const v = new Video('a')

video.showTags()

