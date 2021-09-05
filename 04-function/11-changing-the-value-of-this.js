//TODO method -> obj
//TODO function -> global (window, global)

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    //** proble function point global object
    // this.tags.forEach(function (tag) {
    //   console.log(this.title, tag)
    // })

    //? solution 1
    // const self = this
    // this.tags.forEach(function (tag) {
    //   console.log(self.title, tag)
    // })

    // ? solution 2
    // this.tags.forEach(function (tag) {
    //   console.log(this.title, tag)
    // }.bind(this))

    // ? solution 3
    this.tags.forEach((tag) => {
      console.log(this.title, tag)
    })
  },
}
video.showTags()

// function playVideo() {
//   console.log(this)
// }

// playVideo()
// playVideo.call({ name: "Mosh" }, 1, 2)
// playVideo.apply({ name: "Mosh" }, [1, 2])
// playVideo.bind({ name: "Mosh" }, [1, 2])()
